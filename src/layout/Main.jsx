import Card from "../ui/Card";

function Main({ twoColumns = false }) {
  const description = `7+ years of software development experience, with a focus on building responsive Single Page Applications (SPAs). 5+ years of proficiency in React, Redux, HTML, CSS, and JavaScript. 3+ years of strong experience designing APIs using Node.js, NestJS, and relational & non-relational databases, with a solid understanding of RESTful API architecture. Modern JavaScript (ES standards), TypeScript, ESLint, Prettier, and other code quality tools. Experience writing unit, integration, and automation tests using Jest, Cypress, or similar frameworks, including mocking external functions/libraries, asynchronous calls, and database calls. RESTful APIs, GraphQL, and database technologies including a modern RDBMS. (nice to have): Hands-on experience with AWS cloud technologies (e.g., EC2, S3, RDS, ECS, DynamoDB, IAM). Experience with Docker and CI/CD pipelines is a plus. RBC: Experience in front-end development and web optimization, with strong proficiency in JavaScript, HTML5, CSS3, and modern front-end frameworks and libraries. • Post-secondary degree/diploma (or equivalent) in Web Development, User Experience Design, or Programming. • Solid understanding of digital marketing concepts including behavioural targeting, SEO, audience segmentation, test design, and funnel optimization. • Familiarity with analytics and reporting tools such as GA4, Google Tag Manager, Google Data Studio, Amazon QuickSight, or Tableau`;

  return (
    <main
      className={`w-full p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto grid gap-2 justify-items-center ${
        twoColumns ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      <Card title={"Xbox Recovery"} content={description} />
    </main>
  );
}

export default Main;
