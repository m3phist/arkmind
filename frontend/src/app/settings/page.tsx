import React from "react";

const Settings = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Hello, I'm Aliff Ibrahim
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          A results-driven developer specializing in developing and maintaining
          accounting cloud software with PHP, with a primary focus on bank
          reconciliation modules. Proficient in frameworks like Next.js,
          Node.js, and cloud infrastructure, delivering automated, scalable
          solutions to optimize workflows and enhance user experience. Former
          entrepreneur and co-founding member of a startup.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Maybank Bank Feed Integration
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Spearheaded the development of a comprehensive bank
                reconciliation module for Maybank Malaysia and Singapore.
              </li>
              <li>
                Engineered dynamic account linking capabilities for
                region-specific differentiation.
              </li>
              <li>
                Implemented an advanced transaction history retrieval system
                with multi-currency support.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Pagetalk</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Developed a comprehensive AI chat SaaS platform enabling
                document-based communication using OpenAPI.
              </li>
              <li>
                Leveraged LangChain for Infinite AI Memory and Pinecone for
                efficient data storage and retrieval.
              </li>
              <li>Enabled real-time streaming features.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Grove e-Commerce Store & CMS
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Developed with shadcn-ui for intuitive user interface
                experience.
              </li>
              <li>
                Implemented all-in-one admin dashboard for content management,
                admin panel, and API hub.
              </li>
              <li>
                Designed a flexible product management system with multiple
                image upload capabilities.
              </li>
              <li>
                Implemented real-time order and sales tracking features with
                Whatsapp notifications on inventory status.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Experiences</h2>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Full Stack Software Engineer
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Solving bug issues related to bank reconciliation, invoices, and
                payments.
              </li>
              <li>
                Integrated Maybank bank feed for streamlined bank reconciliation
                for Financio accounting and ABSS desktop.
              </li>
              <li>
                Developed data recovery processes for outdated databases,
                ensuring data integrity.
              </li>
              <li>
                Remapped defected SST modules related to Credit Note and Tax
                Codes.
              </li>
              <li>
                Built background report generation services for large datasets,
                exporting to PDF and Excel with protected download links.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Product Manager
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Managed product development for both new and existing offerings.
              </li>
              <li>
                Curated day-to-day social media campaigns to promote buy-ready
                products.
              </li>
              <li>
                Trained internal teams on product handling, selection, features,
                and unique selling points.
              </li>
              <li>Built and maintained rapport with customers.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Senior Project Manager Assistant
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Oversaw EHV substation work progress and financial
                disbursements.
              </li>
              <li>Prepared project schedules and OEM documentation.</li>
              <li>
                Conducted site verification and inspection for control relay
                panels.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>
            Cloud computing: Deploy EC2 instances, customizing bundles with
            Docker & Terraform.
          </li>
          <li>
            Data Pipeline: Setup Big Data infrastructure on GCP for data
            ingestion from S3 to GCS with Airflow.
          </li>
          <li>
            Programming Languages: JavaScript, HTML, CSS, Python, SQL, PHP, &
            Bash Scripting.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
