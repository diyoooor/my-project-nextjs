async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [1, 2, 3];
  // await new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     reject("An error");
  //   })
  // );
}

export default async function Home() {
  const data = await fetchData();

  console.log(`data => `, data);

  return (
    <main>
      <div>Landing Page</div>
    </main>
  );
}
