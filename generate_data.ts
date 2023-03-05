#!/usr/bin/env -S deno run --allow-write
const fakeData = {
  users: [
    {
      id: 1,
      name: "Sara",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Funmi",
      department: "Sales",
    },
    {
      id: 3,
      name: "David",
      department: "Marketing",
    },
    {
      id: 4,
      name: "Dante",
      department: "Research",
    },
  ],
};
await Deno.writeTextFile(
  "./data_blob.json",
  JSON.stringify(fakeData, null, 2),
);
