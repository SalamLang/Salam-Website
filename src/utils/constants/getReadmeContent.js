export default async function getReadmeContent() {
  const res = await fetch("https://docs.salamlang.ir/fa/README.md", {
    headers: {
      Accept: "application/vnd.github.v3.raw", // to get raw markdown instead of base64
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch README");
  }

  const content = await res.text(); // since we're requesting raw content
  return content;
}
