import React from 'react';
import { withTheme } from 'styled-components';

const BugBounty = () => {
  return (
    <div className="BugBounty" id='links'>
      <h1>Resources for Bug Bounty</h1>
      <br></br>
      <br></br>
      <div>
        <h2>For Beginners</h2>
        <br></br>
        <ul>
          <li><a href="https://www.bugcrowd.com/resources/faqs/">Bug Bounty FAQ</a></li>
          <li><a href="https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters">Nahamsec's Github Repository</a></li>
          <li><a href="https://youtube.com/playlist?list=PLbyncTkpno5FAC0DJYuJrEqHSMdudEffw">InsiderPhD's Playlist for Beginners</a></li>
          <li><a href="https://portswigger.net/blog/finding-your-first-bug-bounty-hunting-tips-from-the-burp-suite-community">Bug Bounty Tips by Burpsuite</a></li>
          <li><a href="https://www.hacker101.com/videos">HackerOne Videos</a></li>
          <li><a href="https://youtu.be/AbebbJ3cRLI">Crush Bug Bounties in First 12 months</a></li>
          <li><a href="https://zonduu.medium.com/bug-bounty-beginners-guide-683e9d567b9f">Beginner's Guide by Zonduu</a></li>
          <li><a href="https://whoami.securitybreached.org/2019/06/03/guide-getting-started-in-bug-bounty-hunting/">Guide for starters</a></li>
          <li><a href="https://github.com/KathanP19/HowToHunt">How to Hunt</a></li>
          <li><a href="https://portswigger.net/web-security">Learn and Practice all the web vulnerabilities</a></li>
          <li><a href="https://github.com/djadmin/awesome-bug-bounty">Awesome Bug Bounty</a></li>
          <li><a href="https://github.com/heilla/SecurityTesting/blob/master/HuntingCheckList.md">Bug Bounty Checklist</a></li>
          <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet">Bug Bounty Cheatsheet by EdOverflow</a></li>
          <li><a href="https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html">Bug Bounty Cheatsheet</a></li>
          <li><a href="https://youtube.com/playlist?list=PLKAaMVNxvLmAkqBkzFaOxqs3L66z2n8LA">Nahamsec's Recon and Interviews</a></li>
          <li><a href="https://youtube.com/playlist?list=PLd92v1QxPOpokznepcWL0ZfVSeZq9CjR7">XSS Rat's Interviews</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLd92v1QxPOprDQ2lEKf8pYzo_H3L36zSm">XSS Rat's Top5</a></li>
          <li><a href="https://github.com/devanshbatham/Awesome-Bugbounty-Writeups">Bug Bounty Writeups</a></li>
          <li><a href="https://github.com/KingOfBugbounty/KingOfBugBountyTips">KingofBugBounty Tips</a></li>
        </ul>
      </div>
      <br></br>
      <div>
        <h2>Vulnerabilities</h2>
        <br></br>
        <h3>SQL Injection (SQLi)</h3>
        <br></br>
        <ul>
          <li><a href="https://www.w3schools.com/sql/sql_intro.asp">What is SQL</a></li>
          <li><a href="https://www.w3schools.com/sql/sql_injection.asp">What is SQL Injection</a></li>
          <li><a href="https://portswigger.net/web-security/sql-injection">Learn and Practice SQLi</a></li>
          <li><a href="https://sqlwiki.netspi.com/">SQLi cheatsheet by sqlwiki</a></li>
          <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection">SQLi Cheatsheet</a></li>
          <li><a href="https://portswigger.net/web-security/sql-injection/cheat-sheet">Cheatsheet by Portswigger</a></li>
          <li><a href="https://link.medium.com/CdtqeUxxCdb">SQLi Crash Course</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html">SQLi Prevention</a></li>
        </ul>
        <br></br>
        <h3>Cross Site Scripting (XSS)</h3>
        <br></br>
        <ul>
          <li><a href="https://www.acunetix.com/websitesecurity/cross-site-scripting/">What is XSS</a></li>
          <li><a href="https://portswigger.net/web-security/all-labs">Practice all types of XSS</a></li>
          <li><a href="https://portswigger.net/research/cross-site-scripting-research">Portswigger XSS Research</a></li>
          <li><a href="https://youtube.com/playlist?list=PLd92v1QxPOprwgZPY-2b-93IZbOSFvQ5B">A great playlist by XSS Rat himself</a></li>
          <li><a href="https://portswigger.net/web-security/cross-site-scripting/cheat-sheet">XSS Cheatsheet</a></li>
          <li><a href="https://owasp.org/www-community/xss-filter-evasion-cheatsheet">XSS Filter Evasion</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">XSS Prevention</a></li>
        </ul>
        <h3>Broken Authentication</h3>
        <br></br>
        <ul>
          <li><a href="https://hdivsecurity.com/owasp-broken-authentication">What is broken authentication</a></li>
          <li><a href="https://portswigger.net/web-security/authentication">Learn and Practice Authentication vulnerabilities</a></li>
          <li><a href="https://portswigger.net/support/using-burp-to-attack-authentication">Using Burp to attack Authentication Vulnerabilities</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">Authentication Cheatsheet</a></li>
          <li><a href="https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication">Broken Authentication Vectors and Impact</a></li>
          <li><a href="https://www.softwaresecured.com/wp-content/uploads/2020/04/10-Weeks-to-0-Vulnerabilities-Week-2-April-17th-v5.pdf">Broken Authentication by Software Secured</a></li>
          <li><a href="https://www.jigsawacademy.com/blogs/cyber-security/broken-authentication/">Prevention against broken auth</a></li>
        </ul>
        <br></br>
        <h3>Sensitive Data Exposure</h3>
        <br></br>
        <ul>
          <li><a href="https://hdivsecurity.com/owasp-sensitive-data-exposure">What is Sensitive Data Exposure</a></li>
          <li><a href="https://portswigger.net/web-security/information-disclosure">Learn and Practice</a></li>
          <li><a href="https://portswigger.net/support/using-burp-to-test-for-sensitive-data-exposure-issues">Using burp to test sensitive data exposure</a></li>
          <li><a href="https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure">Sensitive data exposure Vectors and Impact</a></li>
          <li><a href="https://www.softwaresecured.com/wp-content/uploads/2020/04/10-Weeks-to-0-Vulnerabilities-Week-3-April-24th-FINAL.pdf">Sensitive Data Exposure by Software Secured</a></li>
          <li><a href="https://www.tutorialspoint.com/security_testing/testing_sensitive_data_exposure.htm">Sensitive Data Exposure by Tutorialspoint</a></li>
          <li><a href="https://medium.com/@BreezeTelecom/sensitive-data-exposure-vulnerability-causes-and-prevention-4c86a19df70d">Causes and Prevention</a></li>
          <li><a href="https://www.indusface.com/blog/sensitive-data-exposure-nightmare-business-enterprises/">Prevention tips by indusface</a></li>
        </ul>
        <br></br>
        <h3>XML External Entities (XXE)</h3>
        <br></br>
        <ul>
          <li><a href="https://www.netsparker.com/blog/web-security/xxe-xml-external-entity-attacks/">What is XXE</a></li>
          <li><a href="https://www.youtube.com/watch?v=gjm6VHZa_8s&ab_channel=PwnFunction">XXE by PwnFunction</a></li>
          <li><a href="https://thexssrat.medium.com/ultimate-xxe-beginner-guide-f3bd123b1f4a?sk=7ab5ace60fb4ad80bd09f51bd701ba41">Ultimate XXE Beginner Guide</a></li>
          <li><a href="https://portswigger.net/web-security/xxe">Learn and Practice XXE</a></li>
          <li><a href="https://portswigger.net/blog/burp-suite-now-reports-blind-xxe-injection">Blind XXE with Burpsuite</a></li>
          <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xxe.md">XXE Cheatsheet</a></li>
          <li><a href="https://www.securityidiots.com/Web-Pentest/XXE">XXE Cheatsheet by security idiots</a></li>
          <li><a href="https://lab.wallarm.com/xxe-that-can-bypass-waf-protection-98f679452ce0/">XXE Bypass</a></li>
          <li><a href="https://www.synack.com/blog/a-deep-dive-into-xxe-injection/">Deep Dive into XXE</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html">XXE Prevention</a></li>
        </ul>
        <br></br>
        <h3>Broken Access Control (BAC)</h3>
        <br></br>
        <ul>
          <li><a href="https://hdivsecurity.com/owasp-broken-access-control">What is Broken Access Control</a></li>
          <li><a href="https://portswigger.net/web-security/access-control">Learn and Practice</a></li>
          <li><a href="https://portswigger.net/support/using-burp-to-test-for-missing-function-level-access-control">Using Burp to test for missing function level AC</a></li>
          <li><a href="https://portswigger.net/support/using-burp-to-test-access-controls">Using Burp to test Access Controls</a></li>
          <li><a href="https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control">Vectors and Impacts</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html">Cheatsheet by OWASP</a></li>
          <li><a href="https://www.packetlabs.net/broken-access-control/">BAC Attack Scenarios</a></li>
          <li><a href="https://owasp.org/www-community/Broken_Access_Control">BAC Prevention</a></li>
        </ul>
        <br></br>
        <h3>Security Misconfiguration</h3>
        <br></br>
        <ul>
          <li><a href="https://hdivsecurity.com/owasp-security-misconfiguration">What is Security Misconfiguration</a></li>
          <li><a href="https://portswigger.net/support/using-burp-to-test-for-security-misconfiguration-issues">Using Burp to find Security Misconfigurations</a></li>
          <li><a href="https://www.tutorialspoint.com/security_testing/testing_security_misconfiguration.htm">Testing Security Misconfigurations</a></li>
          <li><a href="https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration">Vectors and Impacts</a></li>
          <li><a href="https://www.thesslstore.com/blog/how-to-prevent-security-misconfiguration/">Prevent Security Misconfigurations</a></li>
          <li><a href="https://www.thesslstore.com/blog/how-to-prevent-security-misconfiguration/">Prevention tips by Indusface</a></li>
        </ul>
        <br></br>
        <h3>Insecure Deserialization</h3>
        <br></br>
        <ul>
          <li><a href="https://www.acunetix.com/blog/articles/what-is-insecure-deserialization/#:~:text=Insecure%20Deserialization%20is%20a%20vulnerability,OWASP%20Top%2010%202017%20list.">What is Insecure Deserialization</a></li>
          <li><a href="https://portswigger.net/web-security/deserialization">Learn and Practice Insecure Deserialization</a></li>
          <li><a href="https://owasp.org/www-project-top-ten/2017/A8_2017-Insecure_Deserialization">Vectors and Impact</a></li>
          <li><a href="https://thehackerish.com/insecure-deserialization-explained-with-examples/">Insecure Deserialization with examples</a></li>
          <li><a href="https://infosecwriteups.com/demystifying-insecure-deserialization-in-php-684cab9c4d24">Excellent Writeup on Insecure Deserialization</a></li>
          <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html#guidance-on-deserializing-objects-safely">Prevention by OWASP</a></li>
          <li><a href="https://resources.infosecinstitute.com/topic/10-steps-avoid-insecure-deserialization/">Prevention by InfosecInstitute</a></li>
        </ul>
      </div>
      <br></br>
      <div>
        <h2>Practical</h2>
        <br></br>
        <ul>
          <li><a href="https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters/blob/master/assets/tools.md">Tools by Nahamsec</a></li>
          <li><a href="https://github.com/gwen001/pentest-tools">Pentest Tools by Gwen001</a></li>
          <li><a href="https://www.hackerone.com/blog/100-hacking-tools-and-resources">100 Hacking Tools by HackerOne</a></li>
          <li><a href="https://github.com/heilla/SecurityTesting/blob/master/HuntingCheckList.md">Bug Bounty Checklist</a></li>
          <li><a href="https://github.com/djadmin/awesome-bug-bounty">Awesome Bug Bounty</a></li>
          <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet">Bug Bounty Cheatsheet by EdOverflow</a></li>
          <li><a href="https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html">Bug Bounty Cheatsheet</a></li>
          <li><a href="https://csp-evaluator.withgoogle.com/">Check for CSP Vulnerability</a></li>
          <li><a href="https://enfinlay.github.io/sto/ip/domain/bugbounty/2020/09/12/ip-server-domain.html">Subdomain Takeovers</a></li>
          <li><a href="https://github.com/RhinoSecurityLabs/IPRotate_Burp_Extension">IPRotate Burp Extension</a></li>
          <li><a href="https://github.com/PortSwigger/java-deserialization-scanner">Java Deserialization Scanner</a></li>
          <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Insecure%20Deserialization">Insecure Deserialization</a></li>
          <li><a href="https://github.com/s0md3v/Arjun">Tool - Arjun</a></li>
          <li><a href="https://github.com/adamtlangley/gitscraper">Tool - Gitscraper</a></li>
          <li><a href="https://github.com/arthaud/git-dumper">Tool - Git Dumper</a></li>
          <li><a href="https://github.com/kost/dvcs-ripper">Tool - dvcs-ripper</a></li>
          <li><a href="https://github.com/TheBinitGhimire/NtHiM">Tool - Subdomain Takeover(Rust)</a></li>
          <li><a href="https://github.com/benso-io/posta">Tool - Posta</a></li>
          <li><a href="https://github.com/Cgboal/SonarSearch">Tool - SonarSearch</a></li>
          <li><a href="https://github.com/junnlikestea/vita">Tools - Vita</a></li>
          <li><a href="https://github.com/epinna/tplmap">Tool - Tplmap</a></li>
          <li><a href="https://github.com/defparam/smuggler">Tool - Smuggler</a></li>
          <li><a href="https://github.com/ameenmaali/urldedupe">Tool - Urldedupe</a></li>
          <li><a href="https://github.com/epi052/feroxbuster">Tool - Feroxbuster</a></li>
          <li><a href="https://gitlab.com/0xatul/bulkreq">Tool - Bulkreq</a></li>
          <li><a href="https://github.com/nil0x42/phpsploit">Tool - Phpsploit</a></li>
          <li><a href="https://medium.com/@raebaker/using-foca-for-osint-document-metadata-analysis-6745c8d709fa">Use Foca for Metadata Analysis</a></li>
          <li><a href="https://github.com/bytebutcher/burp-send-to">Burp "burp-send-to" Extension</a></li>
          <li><a href="https://medium.com/bugbountywriteup/bypassing-rate-limit-like-a-pro-5f3e40250d3c">Bypass Rate Limit</a></li>
        </ul>
      </div>
    </div >
  );
};

export default BugBounty;
