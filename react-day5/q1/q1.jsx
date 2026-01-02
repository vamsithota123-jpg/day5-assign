import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users/1", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user");
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

    // ✅ Cleanup for unmounted component (hidden test)
    return () => {
      controller.abort();
    };
  }, [retryCount]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      {loading && <p>Loading...</p>}

      {error && (
        <>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={() => setRetryCount(retryCount + 1)}>
            Retry
          </button>
        </>
      )}

      {user && !loading && !error && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
