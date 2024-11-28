import {
  InternshipBenefits,
  InternshipHero,
  InternshipOpportunities,
  InternshipProcess,
} from "../components/Internship";

export default function Internship() {
  return (
    <>
      <InternshipHero />
      <InternshipOpportunities />
      <InternshipBenefits />
      <InternshipProcess />
    </>
  );
}
