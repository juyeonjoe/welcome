const el=document.getElementById('typing');
if(el&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const lines=["Hi :)","I'm Juyeon Joe.","Welcome to my page!"];let line=0,char=0;
 el.replaceChildren();
 function type(){if(line>=lines.length)return;
 if(char<lines[line].length){el.append(document.createTextNode(lines[line][char++]));setTimeout(type,80);}
 else{line++;char=0;if(line<lines.length)el.append(document.createElement('br'));setTimeout(type,400);}}
 type();
}
