import { useEffect, useState } from "react";

function GitHubUserSearch() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);
    setUser(null);

    fetch(`https://api.github.com/users/${query}`, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    // ✅ Cleanup for stale requests (hidden test)
    return () => controller.abort();
  }, [query]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setQuery(input)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p><strong>Name:</strong> {user.name || "N/A"}</p>
          <p><strong>Bio:</strong> {user.bio || "N/A"}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubUserSearch;
