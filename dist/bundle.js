(()=>{"use strict";var e=function(e,o,i){var a=document.createElement(e);o&&(a.className=o),i&&(a.id=i);for(var t=arguments.length,n=new Array(t>3?t-3:0),s=3;s<t;s++)n[s-3]=arguments[s];return n&&n.forEach((function(e){a.append(e)})),a},o=function(e,o){var i=document.createElement("div");i.className=e,o&&(i.id=o);for(var a=arguments.length,t=new Array(a>2?a-2:0),n=2;n<a;n++)t[n-2]=arguments[n];return t.forEach((function(e){i.append(e)})),i},i=function(e,o){var i=document.createElement("a");i.href=e,o&&(i.className=o);for(var a=arguments.length,t=new Array(a>2?a-2:0),n=2;n<a;n++)t[n-2]=arguments[n];return t.forEach((function(e){i.append(e)})),i},a=function(e,o,i,a){var t=document.createElement("img");return t.src=e,t.alt=o,i&&(t.className=i),a&&(t.width=a),t},t=e("section","introduction");[{githubLink:"https://github.com/Pipchenkovaa",githubIcon:"./images/icons/github.svg",githubIconAlt:"Github Icon",telegramLink:"https://t.me/@pip_ch",telegramIcon:"./images/icons/telegram-icon.svg",telegramIconAlt:"Telegram Icon",emailLink:"mailto:pipchenkova0701@gmail.com",emailIcon:"./images/icons/email.svg",emailIconAlt:"Email Icon",avatarImage:"./images/avatar.png",avatarImageAlt:"Alina's avatar",heading:"Hi there! My name's Alina and, above all else, I love ",text:"I'm currently studying at the HSE University, and my goal is to become a frontend developer and create modern, efficient web interfaces"}].forEach((function(n){var s=a(n.githubIcon,n.githubIconAlt,"github-contact",30),c=e("p",null,null,"View GitHub"),l=i(n.githubLink,"welcome-info__socials connection headers-text-color button-link-decor",s,c),r=a(n.telegramIcon,n.telegramIconAlt,"telegram-contact social-link button-link-decor",46),g=i(n.telegramLink,"welcome-info__socials",r),d=a(n.emailIcon,n.emailIconAlt,"social-link button-link-decor",46),m=i(n.emailLink,"welcome-info__socials",d),h=o("welcome-info__socials",null,l,g,m),p=e("p","welcome-info__additional-text body-text-color",null,n.text),u=e("span","welcome-info__main-text__highlighting headers-text-color",null,"programming"),v=e("h1","welcome-info__main-text headers-text-color",null,n.heading,u),I=o("card welcome-info card-decor",null,h,v,p),f=a(n.avatarImage,n.avatarImageAlt,"avatar__image"),b=o("card avatar background-gradient border-common",null,f);t.append(I,b)}));var n=e("h4","body-text-color",null,"My technology stack"),s=o("technology-stack__scrolling-wrapper marquee marquee--8");[{src:"./images/icons/html.svg",alt:"HTML Logo"},{src:"./images/icons/css.svg",alt:"CSS Logo"},{src:"./images/icons/tailwind.svg",alt:"Tailwindcss Logo"},{src:"./images/icons/js.svg",alt:"JavaScript Logo"},{src:"./images/icons/git.svg",alt:"Git Logo"},{src:"./images/icons/scss.svg",alt:"SCSS Logo"},{src:"./images/icons/webpack.svg",alt:"Webpack Logo"},{src:"./images/icons/gsap.svg",alt:"GSAP Logo"}].forEach((function(e){var o=a(e.src,e.alt,"marquee__item stack-logo");s.append(o)}));var c=e("section","technology-stack",null,n,s),l=e("h4","body-text-color",null,"Some examples of my work"),r=e("section","pet-projects");r.append(l),[{projectName:"Fantasy Authorization Form",href:"https://pipchenkovaa.github.io/Authorization-Form/",projectImageSrc:"./images/login-form.png",projectImageAlt:"Fantasy Auth Form",imageCardClass:"project-example dark-card",projectDescription:"The stunning design of the two-page authorization form is suitable for both new & registered users",usedTechnologies:[{imageIcon:"./images/icons/scss.svg",imageAlt:"SCSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!0,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/git.svg",imageAlt:"GIT Logo",hiddenClass:!1,hiddenId:!1}]},{projectName:"Website With A Parallax Effect",href:"https://pipchenkovaa.github.io/Website-With-A-Parallax-Effect/",projectImageSrc:"./images/3d-forest.png",projectImageAlt:"3D Forest",imageCardClass:"project-example dark-card",projectDescription:"A simple website with a parallax effect, created primarily using JavaScript & Adobe Photoshop",usedTechnologies:[{imageIcon:"./images/icons/scss.svg",imageAlt:"SCSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!0,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/photoshop.svg",imageAlt:"Photoshop Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/gsap.svg",imageAlt:"GSAP Logo",hiddenClass:!1,hiddenId:!0}]},{projectName:"Apple / Mac Website",href:"https://pipchenkovaa.github.io/Apple_Mac-Website/",projectImageSrc:"./images/apple-site.png",projectImageAlt:"Apple Mac Website",imageCardClass:"project-example light-card",projectDescription:"An updated, multi-page website that is inspired by the iconic style of Apple Inc. The first major project of it's kind",usedTechnologies:[{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/photoshop.svg",imageAlt:"Photoshop Logo",hiddenClass:!1,hiddenId:!1}]},{projectName:"Minimalistic News Website",href:"https://pipchenkovaa.github.io/News-Website/",projectImageSrc:"./images/tailwind.png",projectImageAlt:"News Website",imageCardClass:"project-example light-card",projectDescription:"A minimalist fashion news website, where I first used the Tailwind CSS framework",usedTechnologies:[{imageIcon:"./images/icons/tailwind.svg",imageAlt:"Tailwindcss Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1}]}].forEach((function(t){var n,s,c=a(t.projectImageSrc,t.projectImageAlt,t.imageCardClass,800),l=i(t.href,null,c),g=o("image-cover",null,l),d=e("h5","project-name headers-text-color headers-link",null,t.projectName),m=i(t.href,null,d),h=o("project-descrtiption_cover",null,m),p=e("p","add-project-info body-text-color",null,t.projectDescription),u=o("used-technologies hidden-mobile-small",null,(n=t.usedTechnologies,(s=document.createElement("ul")).className="used-technologies__list",n.forEach((function(e){var o=document.createElement("li");o.className="used-technologies__list__wrapper border-common",e.hiddenClass&&o.classList.add("hidden-one"),e.hiddenId&&(o.id="specialDesktop");var i=a(e.imageIcon,e.imageAlt,null,30);o.append(i),s.append(o)})),s)),v=o("project-description",null,h,p,u),I=o("project-card card-decor",null,g,v);r.append(I)}));var g=e("h5","headers-text-color");g.innerHTML="&#10022;  Layout Design Development";var d=e("p","body-text-color",null,"I'll design an exquisite website based on your existing ready-made layout, with a focus on styles"),m=o("first-service border-right","layout",g,d),h=e("h5","headers-text-color");h.innerHTML="&#10022;  Frontend Development";var p=e("p","body-text-color",null,"I'll create a fully responsive & unique website that focuses on JavaScript development"),u=o("second-service","frontend",h,p),v=o("proposed-services",null,m,u),I=e("p",null,null,"View GitHub"),f=a("./images/icons/arrow.svg","Arrow Icon","arrow",35),b=i("https://github.com/Pipchenkovaa","connection headers-text-color button-link-decor",I,f),A=o("intrest-form-content__register",null,b),L=e("span","intrest-form-content__highlighting headers-text-color",null,"Interested?"),w=e("h1","headers-text-color",null,"Did You Become ",L),C=o("card intrest-form-content card-decor",null,w,v,A),_=e("section","services",null,C),j=o("connection-icons");[{href:"https://t.me/@pip_ch",src:"./images/icons/telegram-icon.svg",alt:"Telegram Icon"},{href:"https://wa.me/79169259277",src:"./images/icons/whatsapp.svg",alt:"WhatsApp Icon"},{href:"tel:+79169259277",src:"./images/icons/phone.svg",alt:"Phone Icon"},{href:"mailto:pipchenkova0701@gmail.com",src:"./images/icons/email.svg",alt:"Email Icon"}].forEach((function(e){var t=a(e.src,e.alt,"icon__space button-link-decor",45),n=i(e.href,null,t),s=o("icon",null,n);j.append(s)}));var y=e("p","body-text-color");y.innerHTML="Available Hours: 9:00 AM – 9:00 PM <br> (Moscow Time)";var S=e("span","stay-connected__highlighting headers-text-color",null,"Connected"),k=e("h1","headers-text-color",null,"Stay ",S),x=o("stay-connected",null,k,y,j),T=e("section","footer",null,x),M=e("p",null,null,"© Pipchencova Alina, 2024"),E=o("copy-rights body-text-color",null,M),H=e("section","rights",null,E),N=[t.outerHTML,c.outerHTML,r.outerHTML,_.outerHTML,T.outerHTML,H.outerHTML],P=o("container","app");document.body.append(P),N.forEach((function(e){return P.insertAdjacentHTML("beforeend",e)}))})();