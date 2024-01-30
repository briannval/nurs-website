import { NewReview, insertReview } from "@/lib/db";

async function main() {
  const newReview: NewReview = {
    name: "Brian Adhitya",
    email: "brianvalentinoadhitya@gmail.com",
    message: "I love this website!",
  };

  const res = await insertReview(newReview);
  console.log("Insert Review Success", res);
  process.exit();
}

main();
