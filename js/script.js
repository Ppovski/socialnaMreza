function whats(){
                if(document.getElementById("comment").value == '')
                {
                    document.getElementById("comment").style.display ="none";
 
                } else{
                    var btn=document.createElement("textarea");
                    var txt=document.getElementById("comment").value;
                    document.getElementById("comment").value=' ';
                    btn.style.width = "100%";
                    btn.style.height = "120px";
                    btn.style.borderradius = "5px";
                    btn.style.border = "2px solid #88b5dd";
                    btn.style.resize = "none";
                    btn.style.background = "#e6e6e6";
                    btn.value=txt;
                    document.body.appendChild(btn);
                    tuka.insertBefore(btn, tuka.childNodes[0]).readOnly = true;
                    
                }
            }