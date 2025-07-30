import React from "react";
import { FiCheckCircle } from "react-icons/fi"; // Not used in this particular content, but kept as it was in original import
import BgImage from "../../assets/Terms-banner";
import CTA from "../../assets/CTA.jpg"; // Not used in this particular content, but kept as it was in original import
import { Link } from "react-router-dom"; // Not used in this particular content, but kept as it was in original import

const Terms = () => {
  return (
    <>
      {/* Breadcrumb Hero Section */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(102, 163, 210, 0.6), rgba(102, 163, 210, 0.4)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Terms Section */}
      <section className="py-16 lg:py-16 bg-gray-50">
        <div className="max-w-7 xl mx-auto text-justify px-4 sm:px-6 lg:px-8 text-gray-800">
            <p className="mb-4">
              Please read these terms and conditions carefully. By engaging{" "}
              <strong>PR HVAC Private Limited</strong> for services or
              purchasing products, you agree to be bound by these terms.
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              1. Scope of Terms and Conditions
            </h3>
            <p className="mb-6 leading-relaxed">
              The Terms and Conditions of product sales and service projects are
              limited to those contained herein. By accepting delivery of the
              products or by engaging <strong>PR HVAC Private Limited</strong>{" "}
              (“Seller”) to provide product(s) or perform any services, Customer
              agrees to be bound by and accepts these Terms and Conditions.
              These Terms and Conditions constitute a binding contract between
              Customer and Seller.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              2. Payment Terms
            </h3>
            <p className="mb-6 leading-relaxed">
              Customer shall pay Seller according to the terms contained in the
              Installation Proposal. Retail service work, equipment replacement,
              and duct-work replacements shall be paid on the day of completion.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              3. Customer Responsibilities
            </h3>
            <p className="mb-6 leading-relaxed">
              Customer agrees to timely furnish all information necessary to
              secure plans and permits for the work. Customer is responsible for
              Homeowner Association, Condo Association, Property Owner
              Association, or other similar approvals; written copies of such
              must be given to **PR HVAC Private Limited** prior to material
              being ordered. Customer is responsible for Homeowner Association
              security deposit or bond if one is required. Customer is also
              responsible for routine maintenance such as filter changes and
              drain line cleanings.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              4. Work Schedule and Substitutions
            </h3>
            <p className="mb-6 leading-relaxed">
              Work shall be completed within a reasonable time. Performance of
              this Agreement is subject to labor strikes, acts of God, adverse
              weather conditions, unusual delays in transportation, Seller’s
              ability to obtain materials, and/or any cause beyond Seller’s
              control. Should Seller be unable to obtain any material(s)
              specified, Seller shall have the right to substitute comparable
              materials.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              5. Limited Warranty
            </h3>
            <p className="mb-6 leading-relaxed">
              Seller shall provide Customer with a limited warranty on service
              and labor for the duration set forth in the Installation
              Agreement, against defects in the quality of workmanship and/or
              materials. This warranty does not cover: (a) damage due to
              ordinary wear and tear or abusive use; (b) damage due to use of
              the equipment beyond the design temperatures; (c) defects that are
              the result of characteristics common to the materials used; (d)
              loss, injury, or damages caused by weather elements; (e)
              conditions resulting from condensation, expansion, or contraction
              of materials; (f) any water leak, blockage, freezing, or other
              malfunction of condensate or drain lines; and/or (g) air leaks
              arising from structural deficiencies within existing supply/return
              ducts or transitions. If Customer opts for a Warranty Period
              exceeding one (1) year, Customer agrees to maintain a yearly
              service agreement for the entire duration. Seller is not
              responsible for any warranties provided by the manufacturer.
              **IMPORTANT:** The labor warranty, manufacturer warranty, or
              extended warranty does not cover maintenance-related issues,
              including but not limited to, filter changes or cleanings, plugged
              drain line issues, dirty or impacted evaporator/condensing coils.
              Preventative maintenance is required annually by a licensed HVAC
              contractor, and failure to perform or document such maintenance
              may void your warranty. Unauthorized repairs or attempted repairs
              shall void this warranty entirely.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              6. Design Conditions
            </h3>
            <p className="mb-6 leading-relaxed">
              All equipment is designed according to standard design
              temperatures. Seller is not responsible for cooling/heating beyond
              these standard design temperatures, high humidity levels, system
              reaching dew point, or ductwork sweating/producing condensate due
              to home infiltration rates or any other reason. If Customer does
              not provide load calculations or authorize Seller to conduct its
              own testing, Seller shall size the new HVAC system based on the
              size of the existing HVAC system. In such cases, Seller shall not
              be responsible for problems caused by over-sizing or under-sizing.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              7. Performance or Condition of Existing Equipment
            </h3>
            <p className="mb-6 leading-relaxed">
              Seller is not responsible for the performance, functionality, or
              compatibility of existing equipment, duct-work, controls, or other
              equipment/materials not replaced during installation that Customer
              agrees to keep in place. Customer assumes all responsibility for
              additional service charges if an existing piece of equipment
              prevents the proper start-up or operation of new equipment.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              8. Existing Line Set and Piping
            </h3>
            <p className="mb-6 leading-relaxed">
              Seller is not responsible for problems with heating or cooling due
              to the existing line set, which may require repair and replacement
              at an additional cost. Should Customer reject Seller’s
              recommendation to replace an existing line set, Seller’s limited
              warranty is voided. Seller is also not responsible for the
              condition of any existing condensate or copper piping that is not
              readily accessible; Customer is responsible for additional costs
              for testing or repairs.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">9. Mold</h3>
            <p className="mb-6 leading-relaxed">
              Seller shall not be responsible for any claims, damages, or
              liabilities relating to mold. The discovery and/or removal of any
              mold or hazardous materials is excluded from Seller’s work, and
              Seller reserves the right to stop work until such materials are
              removed.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">
              10. Extended Warranty
            </h3>
            <p className="mb-6 leading-relaxed">
              If you have purchased an extended warranty, your warranty
              information will be sent from the third-party vendor it was
              purchased from. **PR HVAC Private Limited** is not the extended
              warranty provider. All claims will be submitted and reviewed by
              the third-party provider, who has the right to decline a warranty
              request. **PR HVAC Private Limited** holds no responsibility for
              declined claims. Extended warranties do not cover
              maintenance-related issues in any capacity, including filters and
              restricted drain lines. You will be charged for any maintenance
              repairs or trip charges if the work is determined to be related to
              insufficient maintenance practices.
            </p>
          </div>
      </section>
    </>
  );
};

export default Terms;
