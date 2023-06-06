async function getAllUsers() {
  const res = await fetch(
    `https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/users`
  );
  if (!res.ok) {
    const error = {
      message: "Failed to fetch user data!",
      statusText: res.statusText,
      status: res.status,
    };
    throw error;
  }
  let data = await res.json();
  return data.body;
}

export { getAllUsers };
