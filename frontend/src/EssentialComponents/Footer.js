import './topnav.css';


function Footer(){
    const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
return (
  <footer class="footer">
  © { yearTxt } Ticketaty - Developed by TWBB
  </footer>
)}
export default Footer;