import React from 'react';
import tw from 'twin.macro';

const data = [
  {
    title: '',
    des: `These terms & conditions apply to Gaia Veterinary Centre's (“Gaia Vets”, “we”, “us” or “our”) Website/Service and do not apply to the content of third parties. The Gaia Vets Website/Service is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of the Gaia Vets Website/Service constitutes your agreement to all such terms, conditions, and notices.`,
  },
  {
    title: '1. Modification of The Terms & Conditions',
    des: `Gaia Vets reserves the right to change the terms, conditions, and notices under which the Gaia Vets Website/Service is offered, including but not limiting to the charges associated with the use of the Gaia Vets Website services. You are responsible for regularly reviewing these terms and conditions. Your continued use of the Gaia Vets Website/Service constitutes your agreement to all such terms, conditions, and notices.`,
  },
  {
    title: '2. Personal And Non-Commercial Use Limitation',
    des: `Unless otherwise specified, the Gaia Vets Website/Service is for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, licence, create derivative works from, transfer, or sell any information, software, products or services obtained from the Gaia Vets Website/Service. Without the advance express written permission of Gaia Vets, you may not 'meta-search' the Gaia Vets Website/Service, send, or cause to be sent, any automated queries of any sort to the Gaia Vets Website/Service, or use the Gaia Vets Website/Service in any commercial manner. “Automated queries” shall include but not limited to using any software that sends queries to Gaia Vets Website/Service to determine how a Website “ranks”.`,
  },
  {
    title: '3. Links to Third Party Sites',
    des: `The Gaia Vets Website/Service may contain links to third party Websites (“Linked Sites”). The Linked Sites are not under the control of Gaia Vets and Gaia Vets cannot accept responsibility for the contents of or the consequences of accessing any linked website, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Gaia Vets is not responsible for webcasting or any form of transmission received from any Linked Site nor is Gaia Vets responsible if the Linked Site is not working appropriately. Gaia Vets is providing these links to you only as a convenience, and the inclusion of any links does not imply endorsement by Gaia Vets of the site or any association with its operators. You are responsible for viewing and abiding by the privacy statements and terms of use posted at the Linked Sites.`,
  },
  {
    title: '4. No Unlawful Or Prohibited Use',
    des: `As a condition of your use of the Gaia Vets Website/Service, you will not use the Gaia Vets Website/Service for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Gaia Vets Website/Services in any manner that could damage, disable, overburden, or impair any Gaia Vets Website/Service(s) (or the network(s) connected to Gaia Vets Website/Service(s)) or interfere with any other party's use and enjoyment of any Gaia Vets Service(s). You may not attempt to gain unauthorised access to Gaia Vets Website/Service, other accounts, computer systems or networks connected to Gaia Vets Website/Service, through hacking, password mining or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Gaia Vets Website/Services.`,
  },
  {
    title: '5. Use of Services',
    des: `You agree: (i) to comply with all the notices, guidelines, rules and instructions pertaining to the use of Gaia Vets Website/Services as issued by Gaia Vets from time to time, including all specific terms and conditions governing use of specific aspects of the Service (including any New Services) and any Additional Terms (see Clause 9 below), operating rules or policies that may be published from time to time by Gaia Vets and/or made available at Gaia Vets Website/Services; (ii) to abide by all applicable laws and regulations in your use of Gaia Vets Website/Services; (iii) not to share or disclose your UserID and Password (defined below) to any other party; (iv) not to impersonate any person or entity or to falsely state or otherwise misrepresent your affiliation with any person or entity; (v) not to upload or distribute in any way files which you know or have reason to suspect contain viruses, corrupted files or any other similar software, programs, macros or files that may detrimentally interfere with Gaia Vets Website/Services; or to do anything which would create or impose an unreasonable or disproportionately large burden or load on Gaia Vets Website; (vi) not to gather and use User Materials posted or transmitted through Gaia Vets Website for unsolicited advertising or other unsolicited purposes; (vii) not to use Gaia Vets Website/Services for illegal purposes; (viii) not to post or transmit “junk mail”, “spam”, “chain letters” or engage in unsolicited mass distribution of email or to transmit any unsolicited advertising in any form whatsoever; (ix) not to post, promote or transmit information through Gaia Vets Website which may infringe the rights of any third party, whether in statute or at common law, including but is not limited to any third party's copyright, patent, trademark, trade secret or proprietary rights or rights of publicity or privacy; (x) copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover the source code of any software that is used in connection with Gaia Vets Website/Service; and (xi) not to post, promote or transmit through Gaia Vets Website any unlawful, harassing, libellous, defamatory, harmful, vulgar, obscene or otherwise objectionable material of any kind or nature. Gaia Vets reserves the right at all times to disclose any information as Gaia Vets deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, under Gaia Vets's sole discretion.`,
  },
  {
    title: '6. Materials Provided to Gaia Vets',
    des: `Gaia Vets does not claim ownership of the materials you provide to Gaia Vets (including feedback and suggestions) or post, upload, input or submit to Gaia Vets Website/Services or its associated services for review. However, by posting, uploading, inputting, providing or submitting (“Posting”) your Submission you are granting Gaia Vets and its affiliated companies permission to use your Submission in connection with the operation of their businesses, including, without limitation, the licence rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; to publish your name in connection with your Submission; and the right to sublicense such rights to any supplier of Gaia Vets Website/Services. No compensation will be paid with respect to the use of your Submission, as provided herein. Gaia Vets is under no obligation to post or use any Submission you may provide and Gaia Vets may remove any Submission at any time in its sole discretion. By Posting a Submission, you warrant and represent that you own or otherwise control all rights to your Submission as described in these Terms & Conditions including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.`,
  },
  {
    title: '7. Confidentiality',
    des: `Gaia Vets shall ensure that its agents, employees, representatives, and subcontractors treat as confidential and not disclose any information which comes into its or their possession, pursuant to or as a result of or in the performance of this agreement, whether such information relates to the business, sales, marketing, operations or practices of the User or otherwise, unless approved by the User. You agree that the information and/or particulars you send through Gaia Vets Website/Services is non-confidential and non-proprietary unless otherwise expressly indicated. You hereby authorise each of them to, disclose such information to any person but only in connection with the provision of the Services. This clause shall survive the termination of the Terms & Conditions without limit in point of time but shall cease to apply for information or knowledge which may properly come into public domain through no fault of Gaia Vets.`,
  },
  {
    title: '8. Liability Disclaimer',
    des: `The information, software, products, and services included in or available through Gaia Vets Website/Services may include inaccuracies or typographical errors. Changes are periodically made to Gaia Vets Website/Services and to the information therein. Gaia Vets and/or its respective suppliers may make improvements and/or changes in the Gaia Vets Website/Services at any time. Advice received via the Gaia Vets Website/Services should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation. Gaia Vets and/or its respective suppliers make no representations about the suitability, reliability, availability, timeliness, lack of viruses or other harmful components and accuracy of the information, software, products, services and related graphics contained within Gaia Vets Website/Services for any purpose. All such information, software, products, services and related graphics are provided “as is” without warranty of any kind, Gaia Vets and/or its respective suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services and related graphics, including all implied warranties and conditions of merchantability, fitness for a particular purpose, workmanlike effort, title and non-infringement. You specifically agree that Gaia Vets shall not be responsible for unauthorised access to or alteration of your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through Gaia Vets Website/Service. You specifically agree that Gaia Vets is not responsible or liable for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party or any infringement of another's rights, including intellectual property rights. You specifically agree that Gaia Vets is not responsible for any content sent using and/or included in Gaia Vets Website/Services by any third party. In no event shall Gaia Vets and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the Gaia Vets Website/Services. With the delay or inability to use the Gaia Vets Website/Services or related services, the provision of or failure to provide services, or for any information, software, products, services and related graphics obtained through Gaia Vets Website/Services or otherwise arising out of the use of Gaia Vets Website/Services, whether based on contract, tort, negligence, strict liability or otherwise, even if Gaia Vets or any of its suppliers has been advised of the possibility of damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. If you are dissatisfied with any portion of the Gaia Vets Website/Services, or with any of these Terms & Conditions, your sole and exclusive remedy is to discontinue using Gaia Vets Website/Services`,
  },
  {
    title: '9. New services And Other Applicable Terms',
    des: `Gaia Vets reserves the right, but shall not be obliged to adapt and/or modify Gaia Vets Website/Services or to introduce new services, functions and/or features (all such adaptations, modifications and/or new services, functions and features to be collectively referred to as “New Services”). The term “Service shall include News Services unless otherwise indicated. All New Services shall be governed by these Terms & Conditions and may be subject to additional terms and conditions (“Additional Terms”) which you shall be required to agree to, before access to and use of such New Services are provided. In the event of any inconsistency between this Terms & Conditions and the Additional Terms, the Additional Terms shall prevail in so far as the inconsistency relates to the modification of the Service and contents of Gaia Vets Website unless otherwise provided.`,
  },
  {
    title: '10. Termination/Access Restriction',
    des: `Gaia Vets reserves the right, in its sole discretion, to terminate your access to Gaia Vets Website/Services and the related services or any portion thereof at any time, without notice. Gaia Vets may also terminate or suspend your access to Gaia Vets Website/Services for inactivity, which is defined as failing to log into a particular service for an extended period of time, as determined by Gaia Vets. Upon termination of Gaia Vets Website/Services, your right to use Gaia Vets Website/Services immediately ceases. Gaia Vets shall have no obligation to maintain any content.`,
  },
  {
    title: '11. Disclaimers',
    des: `As To Third Party Content Information and/or content from various sources, including third party content providers, may be included at Gaia Vets Website/Services. Neither Gaia Vets nor any of its content providers shall be liable for any errors or delays in the content furnished at Gaia Vets Website/Services, or for any actions taken in reliance thereon. Gaia Vets is under no obligation to monitor, screen, censor or review transmissions, and the like on Gaia Vets Website, and disclaims any responsibility or liability arising from the content at any such locations nor for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, inaccuracy or any other objectionable material contained in any information within such locations on Gaia Vets Website.`,
  },
  {
    title: '12. No Warranty',
    des: `Gaia Vets Website/Services and all information, materials, services and functions contained therein are provided “as is” and “as available”. While Gaia Vets will use reasonable efforts to perform its duties, no warranty of any kind, implied, express or statutory, including but not limited to any warranties of title, non-infringement of third party rights, merchantability, satisfactory quality, fitness for a particular purpose and freedom from computer virus or other malicious, destructive or corrupting code, agent, program or macros, is given in conjunction with Gaia Vets Website/Service, or any information and materials provided at Gaia Vets Website or through the Service. While Gaia Vets will use reasonable efforts to perform its duties, Gaia Vets does not warrant:- (i) the accuracy, timeliness, adequacy or completeness of the information, materials, services and/or functions provided at or contained in Gaia Vets Website and/or the Service; (ii) that your use of and/or access to Gaia Vets Website, the Service or any information or any materials on Gaia Vets Website, or the Service as a whole, will be uninterrupted, secure or free from errors or omissions or that any identified defect will be corrected; (iii) that Gaia Vets Website/Service or any information or materials provided therein will meet your requirements or are free from any virus or other malicious, destructive or corrupting code, agent, program or macros; and (iv) that use of materials displayed on Gaia Vets Website and/or the Service will not infringe rights of third parties. While Gaia Vets will use reasonable efforts to perform its duties, you acknowledge and agree that Gaia Vets does not warrant the security of any information transmitted by or to you using the Service and you hereby accept the risk that any information transmitted or received using Service may be accessed by unauthorised third parties and/or disclosed by Gaia Vets and its officers, employees, or agents to third parties purporting to be you or purporting to act under your authority. You will not hold Gaia Vets or any of its officers, employees or agents responsible or liable, in contract, tort (including negligence or breach of statutory duty), equity or otherwise, for any such access or disclosure or for any damages, losses, expenses, or costs (whether direct or indirect, or whether foreseeable or not) suffered or incurred by you as a result of any such access or disclosure.`,
  },
  {
    title: '13. Limitation of Liability',
    des: `Gaia Vets shall in no event nor for any reasons whatsoever be liable for any damages, loss or expense including without limitation, direct, indirect, special, or consequential damage, or economic loss arising from or in connection with (i) any access, use or the inability to access or use Gaia Vets Website/Service, (ii) any system, server or connection failure, error, omission, interruption, delay in transmission, computer virus or other malicious, destructive or corrupting code, agent program or macros, (iii) any use of or access to any other website or webpage linked to Gaia Vets Website; (iv) any services, products, information, data, software or other materials obtained or downloaded from Gaia Vets Website or the Service or from any other website or webpage linked to Gaia Vets Website or from any other party referred by Gaia Vets Website and/or the Service; or (v) any dispute arising between you and any Third Party Service Provider of Gaia Vets Website/Service, even if Gaia Vets has been advised of the possibility of such damages, losses, or expenses.`,
  },
  {
    title: '14. Indemnity',
    des: `You shall fully indemnify Gaia Vets, its officers and employees against all actions or claims arising out of your breach at the provisions contained herein and/or in connection with your use of Gaia Vets Website/Service brought against Gaia Vets by another User, Third Party Service Provider or any third party unless Gaia Vets is liable due to its own default, negligence or breach of any laws.`,
  },
  {
    title: '15. Intellectual Property',
    des: `All copyright and other intellectual property and proprietary rights in the content, including but not limited to text, software, code, scripts, webpages, music, sound, photographs, video, graphics, graphical user interface, forms, diagrams or other material contained in Gaia Vets Website/Service (“Content') belong to Gaia Vets or other third party content providers. You may download or print the Content solely in connection of your use of the Services. You may access materials displayed on Gaia Vets Website/Service for your non-commercial use only provided that you also retain all copyright and other proprietary notices contained on the materials. You may not, however, sell copy, reproduce, distribute, modify, display, transmit, reuse, re-post, or otherwise use the Content for any public or commercial purposes without Gaia Vets's or the relevant third party content provider's prior written permission.`,
  },
  {
    title: '16. Linking',
    des: `You may not, without Gaia Vets's prior written permission, insert a hyperlink to Gaia Vets Website/Service (or nay part thereof) on any other website or webpage or 'mirror' any material contained on Gaia Vets Website on any other server and you may not establish and/or maintain, on any website or webpage, any in-links, frame links and/or any other type of hyperlinks to Gaia Vets Website or any part thereof (including without limitation any webpages, images, video, audio, graphics, text, code, program and/or any other material on Gaia Vets Website).`,
  },
  {
    title: '17. Notices',
    des: `Any notices, demands or other communications, may be deemed served by Gaia Vets by posting them on Gaia Vets Website or by email or such other methods as prescribed in this Terms & Conditions or by Gaia Vets from time to time. All such notices, demands or other communications are deemed served when :- (i) posted on Gaia Vets Website; or (ii) if by email, when sent to your email address notified to Gaia Vets in writing and shall be effective on the date and time of transmission by the mail server operated by Gaia Vets and/or its service provider unless Gaia Vets receives a non-delivery of 'returned mail' reply message or any error message indicating that the email was not successfully sent to your mailbox or your mail server or the mailbox of your designated service provider within (twenty four hours) from the date of transmission of the email from the email server operated by Gaia Vets or its service provider; or (iii) such other method as prescribed in this Terms & Conditions. Notwithstanding the above provisions, Gaia Vets may from time to time designate other acceptable modes of giving notices under this Terms & Conditions (including but not limited to any form of electronic communication) and the time or event by which such notice shall be deemed given.`,
  },
  {
    title: '18. Force Majeure',
    des: `Gaia Vets will not be liable for non-performance, error, interruption or delay in the performance of its obligations, in Gaia Vets Website's operation, in the provision of the Service (or any part thereof) or for any inaccuracy, unreliability or unsuitability of Gaia Vets Website's contents if this is due, in whole or in part, directly or indirectly to an event or failure which is beyond its reasonable control which includes without limitation:- (I) flood, lightning, acts of God, fire, earthquakes and other natural disasters; (ii) judgments, legislation, acts, orders, directives, policies, restrictions, regulations, bye-laws, prohibitions or measures of any kind on the part of any court, governmental, parliamentary and/or regulatory authority imposed or to be imposed after the fact; (iii) power failure; (iv) acts or defaults of any telecommunications network operator; (v) circumstances where communications lines for Gaia Vets's computer systems (whether in Singapore or elsewhere) cannot be used for reasons attributable to third party telecommunications carriers; and (v) acts or omissions of any Third Party Service Provider or a party for whom Gaia Vets is not responsible.`,
  },
  {
    title: '19. Records',
    des: `You acknowledge and agree that Gaia Vets's records and any records of the communications, transactions, instructions or operations made or performed, processed or effected through the Service and/or Gaia Vets Website by you or any person purporting to be you, acting on your behalf or purportedly acting on your behalf, with or without your consent, or any record of communications, transactions, instructions or operations or operations relating to the operation of the Service and any record of any communications, transactions, instructions or operations maintained or by any relevant person authorised by Gaia Vets relating to or connected with the Service and/or Gaia Vets Website shall be binding on you for all purposes whatsoever and shall be conclusive evidence at such communications, transactions, instructions or operations. You agree that such records are admissible as evidence and that you shall not challenge or dispute the admissibility, reliability, accuracy or the authenticity of the contents of such records merely on the basis that such records were in electronic form or were produced by or are the output of a computer system, and hereby waive any of your rights (if any) to so object.`,
  },
  {
    title: '20. Arbitration',
    des: `Any dispute, controversy or claim arising out of or in connection with the terms and conditions contained herein, including any questions regarding its existence, validity, breach, or termination, shall be referred to and finally resolved by arbitration in Singapore at the Singapore Arbitration Centre (“SIAC”) or at such venue in Singapore as the parties may agree in writing in accordance with the SIAC rules. A tribunal shall consist of a single arbitrator to be appointed by the Chairman of SIAC. The language of the arbitration shall be English. The parties hereto undertake to keep the arbitration proceedings and all information, pleadings, documents, evidence and all matters relating thereto confidential.`,
  },
  {
    title: '21. Severability',
    des: `If any provision or part thereof of this Terms & Condition is held to be invalid or unenforceable, such provision or part thereof shall be struck off and the remaining provisions shall be enforced.`,
  },
  {
    title: '22. Governing Law',
    des: `By accessing Gaia Vets Website and/or using the Service, you agree to Singapore law (including without limitation, the provisions of the Evidence Act (Cap. 97) and the Electronic Transactions Act (Cap. 88) shall govern such access and that this Agreement shall be construed and governed by Singapore law.`,
  },
];

const TermsConditions = () => {
  return (
    <div
      css={tw`px-[8.4375rem] pt-[2.875rem] pb-[7.5rem] lg:(px-[1.875rem] pt-[1.0625rem]) md:!px-5`}
    >
      <div css={tw`w-[73.125rem] m-auto xl:w-full`}>
        <h1
          css={tw`text-color_2 text-[5.625rem] font-montserrat font-[900] leading-[5.0625rem] uppercase md:(text-[3.125rem] leading-[2.8125rem])`}
        >
          Terms & conditions
        </h1>
        <div
          css={tw`flex flex-col gap-10 pt-[3.75rem] md:(pt-[1.875rem] gap-5)`}
        >
          <h3
            css={tw`text-color_4 text-3xl font-semibold [letter-spacing: -0.0563rem] leading-normal md:(text-2xl)`}
          >
            Last Updated October 2024
          </h3>

          {data.map((item) => (
            <div css={tw`flex flex-col gap-2`}>
              {item?.title && (
                <h3
                  css={tw`text-color_2 text-2xl font-semibold leading-7 [letter-spacing: -0.045rem] md:text-xl`}
                >
                  {item?.title}
                </h3>
              )}
              <p css={tw`text-color_2 text-lg leading-[1.6875rem]`}>
                {item?.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
