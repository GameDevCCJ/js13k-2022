let D,T,O,M,I,j,Y,C,Q,k,F,$,e1,t1,s,a1,x,l1,y,r1,s1,z=0,w=0,B=0,c1=0,o1=0,i1=0,n1=0,f1=0,m1=0,h1=0,u1=0,R=0,X=0,q=0,g1=14,H=180,v1=.1,t="data:image/svg+xml;base64,"+btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>'),x1=[],N=[],L=[],d1=[{x:-1,z:1},{x:1,z:1},{x:1,z:-1},{x:-1,z:-1}],E=e=>e<0?-e:e,y1=(e,t)=>e<t?e:t,p1=(e,t)=>t<e?e:t,z1=(e,t)=>E(e)>t?e:0,U=(e,t=0,a=1)=>e<t?t:a<e?a:e,w1=e=>J1(_(e*G1),G(e*G1))/G1,S1=(e,t,a)=>e+(2*(t=(t-e)%360)%360-t)*U(a)||0,A1=(e,t,a)=>(0<a?a<1?e+(t-e)*a:t:e)||0,M1=(e,t)=>(e=U(e),A1(e,1-e,t)),I1=(e,t,a=0)=>(e*e+t*t+a*a)**.5,W=(e=0,t=0,a=0,l=1)=>{D=b.m11*e+b.m21*t+b.m31*a+b.m41*l,T=b.m12*e+b.m22*t+b.m32*a+b.m42*l,O=b.m13*e+b.m23*t+b.m33*a+b.m43*l,M=b.m14*e+b.m24*t+b.m34*a+b.m44*l},p=(e,t=l,a=0)=>(a*=16,t[a++]=e.m11,t[a++]=e.m12,t[a++]=e.m13,t[a++]=e.m14,t[a++]=e.m21,t[a++]=e.m22,t[a++]=e.m23,t[a++]=e.m24,t[a++]=e.m31,t[a++]=e.m32,t[a++]=e.m33,t[a++]=e.m34,t[a++]=e.m41,t[a++]=e.m42,t[a++]=e.m43,t[a]=e.m44,t),K=(e=S,t=b)=>(t.m11=e.m11,t.m12=e.m12,t.m13=e.m13,t.m14=e.m14,t.m21=e.m21,t.m22=e.m22,t.m23=e.m23,t.m24=e.m24,t.m31=e.m31,t.m32=e.m32,t.m33=e.m33,t.m34=e.m34,t.m41=e.m41,t.m42=e.m42,t.m43=e.m43,t.m44=e.m44,t),c=(e,t,a)=>S.translate(e,t,a),m=(e,a)=>Array.from(Array(e),(e,t)=>a(t)),f=(e,t,a)=>(e.C=a,e.u=t,e),j1=(e,t,a=e.u)=>(K(t),f(e.map(({x:e,y:t,z:a})=>(W(e,t,a),{x:D,y:T,z:O})),a,e.C)),o=(e,t,a)=>e.map(e=>j1(e,t,a)),Y1=(a,l=0)=>m(a,e=>{let t=G(2*J*e/a);return{x:_(2*J*e/a),y:0,z:E(t)<.01?t:t<0?t-l:t+l}}),C1=(l,r,s)=>l.map((e,t,{length:a})=>f([e,r[a-t-1],r[a-(t+1)%a-1],l[(t+1)%a]],l.u,s)),i=(e,t,a=0,l)=>(e=e?Y1(e,l):d1,l=j1(e,c(0,1).scale3d(0<a?a:1)),e=j1(e,c(0,-1).scale3d(a<0?-a:1)).reverse(),[...C1(e,l,t),l,e]),k1=(l,r=l,s=(e,t)=>(t*=J/r,{x:G(e*=2*J/l)*_(t),y:G(t),z:_(e)*_(t)}))=>{let c=[];for(let a=0;l>a;a++)for(let t=0;r>t;t++){let e=f([],0,1);c.push(e),e.push(s(a,t,e)),t&&e.push(s((a+1)%l,t,e)),r-1>t&&e.push(s((a+1)%l,t+1%r,e)),e.push(s(a,t+1%r,e))}return c},F1=e=>1-r(-B*e),P=(e,t,a)=>A1(e,t,F1(a)),D1=(e,t,a,l)=>new DOMMatrix([a,0,0,0,0,l,0,0,0,0,(t+e)/(e-t),-1,0,0,2*t*e/(e-t),0]),T1=e=>{h4.innerHTML+=".",setTimeout(e)},O1=e=>_(e*J*2),Q1=(e,t)=>{1/0>v1&&(v1=z+t,h4.innerHTML=e)},B1=()=>{h3.innerHTML="Souls: "+[0,"I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII"][i1=x1.reduce((e,t)=>e+t.i,0)]+" / XIII"},R1=()=>{localStorage.spdnt22=JSON.stringify([N.map(e=>e.i),x1.map(e=>e.i),g1,t1,z])},n=(e,t,a,l=0)=>255*l<<24|255*a<<16|255*t<<8|255*e,h=()=>{let l=[];s=(e,t=new DOMMatrix,a)=>l.push(...o(e,t,a)),L.push({m:new DOMMatrix,o:l})},u=e=>{let t=()=>{t.g=P(t.g,t.i,4),t.h=P(t.h,t.i,1),K(a).multiplySelf(e),C&&(W(),I1(R-D,X-T,q-O)<3)?t.i?.7<t.g&&(t.i=0,g1=l,Q1("* click *",1),R1()):t.g<.3&&(t.i=1,g1=l,Q1("* click *",1),R1()):t.i&&.8<t.g&&14===l&&(t.i=0,i1<13?Q1("Not leaving now, there are souls to catch!",3):n1||(Q1("Well done. They will be punished.<br>Thanks for playing",1/0),n1=1)),b.rotateSelf(50*t.g-25,0).translateSelf(0,1).m44=t.g},a=L.at(-1).m,l=N.length;t.m=a,t.F=e,N.push(t),s(i(5),e.translate(-.2).rotate(90,90).scale(.4,.1,.5),n(.4,.5,.5)),s(i(5),e.translate(.2).rotate(90,90).scale(.4,.1,.5),n(.4,.5,.5)),s(i(),e.translate(0,-.4).scale(.5,.1,.5),n(.5,.5,.4))},v=(o,...i)=>{let n,f,m,h,u=0,g=0,v=1,d=-1,p=()=>{if(!p.i){let e,t,a,l,r,s=1,c=1/0;for(let a=0;i.length>a;a++){let e=i[a],t=I1(S-e[0],A-e[1]);s=y1(s,t/e[2]),(t-=e[2])<0?r=1:c>t&&(c=t,b=e)}r||(e=S-b[0],t=A-b[1],a=I1(e,t),l=J1(-t,e),v&&(h=U(h/(1+_1())),g=(_1()-.5)*J/2),l+=g,d=-G(l),u=_(l),.1<a&&(a=y1(a,b[2])/a,S=e*a+b[0],A=t*a+b[1])),v=r,h=P(h,3+6*(1-s),3+s),M=P(M,S=P(S,S+d,h),h),I=P(I,A=P(A,A+u,h),h),n=S1(n,J1(M-f,I-m)/G1-180,F1(3)),K(j).multiplySelf(o).translateSelf(f=M,0,m=I).rotateSelf(0,n,7*_(1.7*z)),W(),I1(R-D,X-T,q-O)<1.6&&(p.i=1,Q1([,"Mark Zuckemberg<br>made the world worse","Giorgia Meloni<br>fascist","Andrzej Mazur<br>for the js13k competition","Donald Trump<br>lies","Kim Jong-un<br>Dictator, liked pineapple on pizza","Maxime Euziere<br>forced me to finish this game","She traded NFTs apes",,"Vladimir Putin<br>evil war","He was not a good person",,"Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat"][i1]||'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift',6),B1(),R1())}p.i&&K(L[35].m).translateSelf(e%4*1.2-1.7+_(z+e)/7,-2,1.7*(e/4|0)-5.5+E(e%4-2)+G(z/1.5+e)/6)},b=i[0],[S,A]=b,[M,I]=b,j=L.at(-1).m,e=x1.length;x1.push(p)},g=({x:e,y:t,z:a},l)=>e*l.x+t*l.y+a*l.z,X1=e=>{let t,a=0,l=0,r=0,s=e.at(-1);for(t of e)a+=(s.y-t.y)*(s.z+t.z),l+=(s.z-t.z)*(s.x+t.x),r+=(s.x-t.x)*(s.y+t.y),s=t;return t=I1(a,l,r),a/=t,l/=t,r/=t,{x:a,y:l,z:r,w:a*s.x+l*s.y+r*s.z}},q1=(l,r)=>{let s,c,o,i=r.B;for(let e=0;i.length>e;++e)if((s=g(l,i[e])-l.w)<-8e-5?o=r:8e-5<s&&(c=r),o&&c){c=[],o=[],i=r.B,e=r.v;let t=i.at(-1),a=g(l,t)-l.w;for(let e of i)s=g(l,e)-l.w,a<8e-5&&o.push(t),-8e-5<a&&c.push(t),(8e-5<a&&s<-8e-5||a<-8e-5&&8e-5<s)&&(a/=s-a,t={x:t.x+(t.x-e.x)*a,y:t.y+(t.y-e.y)*a,z:t.z+(t.z-e.z)*a},c.push(t),o.push(t)),t=e,a=s;return{l:2<c.length&&{B:f(c,i.u,i.C),v:e,A:r},j:2<o.length&&{B:f(o,i.u,i.C),v:e,A:r}}}return{l:c,j:o}},H1=(e,t,a=X1(t.B))=>{let l,r;return e?({l,j:r}=q1(e,t),l||r||e.o.push(t),l&&(e.l=H1(e.l,l,a)),r&&(e.j=H1(e.j,r,a))):e={x:a.x,y:a.y,z:a.z,w:a.w,o:[t],l:0,j:0},e},a=(t,r,s)=>{let c=[],o=(e,t)=>{let{l:a,j:l}=q1(e,t);a||l||(0<s*g(e,r)?a=t:l=t),a&&(e.l?o(e.l,a):c.push(a)),l&&e.j&&o(e.j,l)};for(let e of r.o)o(t,e);return c},N1=(e,t)=>e&&(t(e),N1(e.l,t),N1(e.j,t)),L1=e=>(N1(e,t=>{let e=t.j;t.j=t.l,t.l=e,t.x*=-1,t.y*=-1,t.z*=-1,t.w*=-1;for(let e of t.o)e.v=!e.v}),e),E1=e=>e.length?e.reduce((e,t)=>H1(e,{B:t,v:0,A:0}),0):e,U1=(...e)=>e.reduce((l,t)=>{let r=[];if(l=E1(l),t){t=E1(t),N1(l,e=>e.o=a(t,e,1)),N1(t,e=>r.push([e,a(l,e,-1)]));for(let[t,a]of r)for(let e of a)H1(l,e,t)}return l}),d=(e,...t)=>{let a=e=>{let t;return e.A&&((t=l.get(e.A))?(r.delete(t),e=a(e.A)):l.set(e.A,e)),e},l=new Map,r=new Map;return e=L1(U1(L1(E1(e)),...t)),N1(e,t=>{for(let e of t.o)r.set(a(e),e.v)}),Array.from(r,([{B:e},t])=>{let a=e.map(({x:e,y:t,z:a})=>({x:e,y:t,z:a}));return f(t?a.reverse():a,e.u,e.C)})},V=(e,t=0,a=0)=>{let l=L[++a1].m;return K(S,l),l.m41=e,l.m42=t,l.m43=a,l},W1=e=>{j?1100<hC.width&&Z.d97(4,L[39].D-L[37].s,5123,2*L[37].s):(void 0!==e&&Z.das(4,L[40].D-L[40].s,5123,2*L[40].s,x1.length),Z.das(4,L[41].D-L[41].s,5123,2*L[41].s,N.length),Z.d97(4,(e?L[39].D:L[37].s)-3,5123,6))},K1=(e,t=35633)=>(t=Z.c6x(t),Z.s3c(t,e),Z.c6a(t),t),P1=(e,t)=>{let a={},l=Z.c1h();return Z.abz(l,e),Z.abz(l,K1(t,35632)),Z.l8l(l),e=>e?a[e]||(a[e]=Z.gan(l,e)):Z.u7y(l)},b=new DOMMatrix,S=new DOMMatrix,l=new Float32Array(16),A=new Float32Array(760),V1=new Uint8Array(65536),{PI:J,atan2:J1,sin:_,cos:G,exp:r,random:_1}=Math,G1=J/180,Z=hC.getContext("webgl2",{powerPreference:"high-performance"});for(let e in Z)Z[e[0]+[...e].reduce((e,t,a)=>(e*a+t.charCodeAt(0))%434,0).toString(36)]=Z[e];T1(()=>{let e=0,g=()=>{if(2==++e){let l=t=>{requestAnimationFrame(l);let e=(t-(I||t))/1e3;if(w+=e,z+=B=j?0:y1(.055,e),I=t,0<B){e=(e,t,a)=>V(e+_(z+2)/5,t+_(.8*z)/5,a).rotateSelf(2*_(z),_(.7*z),_(.9*z)),v1&&z>v1&&(v1=0,h4.innerHTML=""),n1&&(Q=0),e1=n1?P(e1,-9,.015):P(e1,U(z/3),1),t1=P(t1,N[14].h,.2+.3*E(2*N[14].h-1)),$(),a1=1,l1=M1(N[13].g,N[8].g),s1=A1(P(s1,0,1),w1(s1+60*B),N[2].g-N[3].h),y=A1(P(y,0,5),w1(y+56*B),l1),r1=A1(P(r1,0,4),w1(r1+48*B),l1),V(0,270*(N[1].g-1)+(2+5*G(1.5*z))*(1-N[10].g)),t=y1(1-N[11].h,N[10].h),V(t*_(.6*z+1.2)*12,0,35),V(t*_(.6*z-1.2)*8.2,0,55),V(t*_(.6*z)*12,0,45),V(9.8*(1-t)),t=U(1-5*t)*M1(N[11].g,N[2].g),V(0,t*_(1.35*z)*4),V(0,0,t*_(.9*z)*8),V(0,-6.5*N[11].h),t=M1(N[4].h,N[3].h),V(0,t*_(z)*5+3.5*(1-p1(N[3].g,N[4].g))),V(0,t*_(z+3)*6,t*_(.6*z+1)*6),V(0,-7.3*N[4].h),t=M1(N[6].g,N[7].g),V(0,-2,10-8.5*t*E(_(1.1*z))),V(0,-2,10-8.5*t*E(_(2.1*z))),V(0,-2,10-8.5*p1(t*E(_(1.5*z)),(1-N[6].g)*(1-t)));var a=M1(N[5].h,N[13].h);for(t=0;t<4;t++)V((2<t?2*(1-a)+a:0)-100,a*_(1.3*z+1.7*t)*(3+t/3)+.7,115-7*(1-N[5].h)*(1-N[13].h)*(1&t?-1:1)+p1(.05,a)*G(1.3*z+7*t)*(4-2*(1-t/3)));t=M1(N[8].h,N[9].h);for(let e=0;e<3;++e)V(0,t*_(1.5*z+1.5*e)*4+(e?0:3*(1-N[8].h)*(1-N[9].h)));for(t=M1(M1((N[9].g+N[9].h)/2,N[8].h),(N[12].g+N[12].h)/2),V(0,16*t,95+8.5*U(2*t-1)),V(0,-4.7*N[0].g,-15),V(0,-4.7*N[10].g,15),V(-99.7,-1.9-5.5*N[3].g,63.5),V(-100,.6-5.8*N[13].g,96.5),V(-75,3*(1-N[2].h)*(1-N[3].g),55).rotateSelf(180*(1-N[2].h)+s1,0),V(2.5*(1-a)-139.7,-3*(1-N[5].g)-a*_(.8*z)-1.8,93.5).rotateSelf(G(1.3*z)*(3+3*a),0),V(-2*_(z)).rotateSelf(25*_(z)),V(-81,.6,106).rotateSelf(0,40+y),V(-65.8,.8,106).rotateSelf(0,r1),V(-50.7,.8,106).rotateSelf(0,180-r1),V(-50.7,.8,91).rotateSelf(0,270+r1),e(-12,4.2,40*e1-66),e(-123,1.4,55-65*t1),e=0;e<13;++e)x1[e](),p(b,A,12+e);for(e=0;e<16;++e)N[e](),p(b,A,25+e);for(let e,t=0,a=656;t<26;++t,++a)e=L[2+t].m,A[a++]=e.m41,A[a++]=e.m42,A[a++]=e.m43;for(x(),e=0;e<12;++e)p(L[28+e].m,A,e);Z.u3a(s("j"),A),Z.v5y(0,0,128,128),Z.c4s(16640),Z.cbf(!0,!1,!0,!1),Z.uae(s("b"),!1,p(K().rotateSelf(0,180).invertSelf().translateSelf(-R,-X,.3-q))),W1(),Z.c4s(256),Z.cbf(!1,!0,!1,!0),Z.uae(s("b"),!1,p(K().translateSelf(-R,-X,-q-.3))),W1(),C=0}e=f1,a=m1,t=h1,j?(K(k).invertSelf(),W(3.6,3.5),e=D,a=T,t=5,K(S,u).rotateSelf(-20,0).invertSelf().translateSelf(-e,-a,-t).rotateSelf(0,99),K().rotateSelf(0,40*_(w)-80,-8),p(b,A,9),p(b,A,10),p(b,A,11)):K(S,u).rotateSelf(-u1,-H).invertSelf().translateSelf(-e,-a,-t),d(),Z.ubu(d("k"),e,a,t),Z.u3a(d("j"),A),Z.uae(d("a"),!1,p(S)),Z.ubh(d("g"),3),Z.ubh(d("h"),3),Z.b6o(36160,i),Z.v5y(0,0,2048,2048),c(54.7),o(126),Z.b6o(36160,null),Z.v5y(0,0,Z.drawingBufferWidth,Z.drawingBufferHeight),Z.cbf(!0,!0,!0,!0),Z.c4s(16640),Z.uae(d("b"),!1,p(u)),Z.uae(d("a"),!1,p(k)),Z.uae(d("i"),!1,g),Z.ubh(d("g"),0),Z.ubh(d("h"),1),W1(!Q),r(),Z.uae(r("b"),!1,p(K(u).invertSelf())),Z.ubu(r("j"),Z.drawingBufferWidth,Z.drawingBufferHeight,w),Z.d97(4,3,5123,0),Z.b6o(36160,n),s(),Z.f1s()},h=new DOMMatrix,u=new DOMMatrix,g=new Float32Array(32),e=f,v=m(8,()=>({})),r=P1(K1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),`#version 300 es
precision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}`),t=K1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}`),s=P1(t,`#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`),d=P1(t,`#version 300 es
precision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`),[c,o]=m(2,e=>{let t=Z.c25();return Z.a4v(33984+e),Z.b9j(3553,t),Z.t60(3553,0,33190,2048,2048,0,6402,5125,null),Z.t2z(3553,10241,9729),Z.t2z(3553,10240,9729),Z.t2z(3553,34893,515),Z.t2z(3553,34892,34894),Z.t2z(3553,10243,33071),Z.t2z(3553,10242,33071),l=>{let a=0,r=0,s=0,c=1/0,o=1/0,i=1/0,n=-1/0,f=-1/0,m=-1/0;Z.fas(36160,36096,3553,t,0),Z.c4s(256),K().scale3dSelf(l*=1.1).multiplySelf(K(F[e],h).multiplySelf(u).invertSelf());for(let t=0;t<8;++t){let e=v[t];W(4&t?1:-1,2&t?1:-1,1&t?1:-1),a-=e.x=(0|D)/l/M,r-=e.y=(0|T)/l/M,s-=e.z=(0|O)/l/M}for(K().rotateSelf(298,139).translateSelf(a/8,r/8,s/8),l=0;l<8;++l){let{x:e,y:t,z:a}=v[l];W(e,t,a),c=y1(c,D),n=p1(n,D),o=y1(o,T),f=p1(f,T),i=y1(i,O),m=p1(m,O)}l=10+e,i*=i<0?l:1/l,m*=0<m?l:1/l,Z.uae(d("b"),!1,p(K(S,h).scaleSelf(2/(n-c),2/(f-o),2/(i-m)).translateSelf((n+c)/-2,(f+o)/-2,(i+m)/2).multiplySelf(b),g,e),16*e,16),W1(!Q)}}),i=Z.c5w(),a=(t=Z.c25(),Z.c3z()),n=Z.c5w();d(),Z.ubh(d("q"),2),r(),Z.ubh(r("q"),2),s(),Z.uae(s("a"),!1,p(D1(1e-4,2,1.2,.4))),Z.b6o(36160,i),Z.d45([0]),Z.r9l(0),Z.b6o(36160,n),Z.bb1(36161,a),Z.r4v(36161,33190,128,128),Z.f8w(36160,36096,36161,a),Z.a4v(33986),Z.b9j(3553,t),Z.t60(3553,0,6408,128,128,0,6408,5121,null),Z.fas(36160,36064,3553,t,0),Z.b9j(3553,Z.c25()),Z.t60(3553,0,6408,1024,1024,0,6408,5121,e),Z.t2z(3553,10241,9987),Z.t2z(3553,10240,9729),Z.gbn(3553),Z.e8z(2929),Z.e8z(2884),Z.c70(1),Z.c7a(1029),Z.d4n(515),Z.c5t(0,0,0,0),(()=>{let e,i,n,f,m,h,u,g,v,d,p,b,S,t,a,l,r=!0,s=[],c=()=>{b4.innerHTML="Music: "+r,l&&(j||!r?l.disconnect():l.connect(a.destination))},o=()=>{let e=(hC.height=innerHeight)/(hC.width=innerWidth)*1.732051;F=[D1(.3,55,e,1.732051),D1(55,181,e,1.732051)],k=D1(.3,181,e,1.732051),f=g=void 0,s.length=C=t=b=S=c1=o1=0,document.hidden&&A(!0)},A=e=>{if(j!==e){if(j=e,o(),document.body.className=e?"l m":"l",e)try{document.exitFullscreen().catch(()=>0),document.exitPointerLock()}catch{}c()}},M=e=>{try{a||(a=new AudioContext,(l=a.createBufferSource()).buffer=Y,l.loop=!0,l.start()),document.body.requestFullscreen().catch(()=>0)}catch{}A(!1),Q=e},I=(e,t)=>e.buttons[t]?.pressed||0<e.buttons[t]?.value?1:0;oncontextmenu=()=>!1,b1.onclick=()=>{M()},b2.onclick=()=>{M(1)},b5.onclick=()=>A(!0),b4.onclick=()=>{r=!r,c()},b3.onclick=()=>{confirm("Restart game?")&&(localStorage.spdnt22="",location.reload())},onclick=e=>{if(!j&&(e.target===hC&&(C=1),Q))try{hC.requestPointerLock()}catch{}},onkeyup=onkeydown=e=>{let t;e.repeat||(t={KeyE:0,Space:0,Enter:0,Escape:1,KeyA:2,ArrowLeft:2,KeyD:3,ArrowRight:3,KeyW:4,ArrowUp:4,KeyS:5,ArrowDown:5}[e.code],(s[t]=!!e.type[5]&&!0)&&(0===t&&(C=1),1===t&&A(!0)))},onmousemove=({movementX:e,movementY:t})=>{Q&&(e||t)&&(H+=.1*e,u1+=.1*t)},hC.ontouchstart=l=>{if(!j){for(let{pageX:e,pageY:t,identifier:a}of l.changedTouches)Q&&e>hC.clientWidth/2?void 0===g&&(v=0,h=e,u=t,g=a,p=u1,d=H):void 0===f&&(m=0,i=e,n=t,f=a);e=w}},hC.ontouchmove=l=>{let r,s,c,o;if(!j)for(let{pageX:e,pageY:t,identifier:a}of l.changedTouches)g===a&&(u1=p+(t-u)/2.3,H=d+(e-h)/2.3,v=1),f===a&&(a=(i-e)/20,r=E(a),s=(n-t)/20,c=E(s),(o=.5<p1(r,c))&&(m=1),b=(o&&.3<r)*U(a,-1),S=(o&&.3<c)*U(s,-1),2<r&&(i=20*(a<0?-1:1)+e),2<c&&(n=20*(s<0?-1:1)+t))},hC.ontouchend=t=>{let a;document.activeElement===document.body&&t.preventDefault();for(let e of t.changedTouches)e.identifier===g?(g=void 0,v||(a=1),v=0):e.identifier===f?(f=void 0,S=b=0,m||(a=1),m=0):a=1;t.target===hC&&a&&e&&.02<(t=w-e)&&t<.7&&(C=1)},$=()=>{c1=S+(s[4]?1:0)-(s[5]?1:0),o1=b+(s[2]?1:0)-(s[3]?1:0);let e=navigator.getGamepads()[0];e&&(Q&&(u1+=B*z1(e.axes[3],.3)*80,H+=B*z1(e.axes[2],.3)*80),c1+=I(e,12)-I(e,13)-z1(e.axes[1],.2),o1+=I(e,14)-I(e,15)-z1(e.axes[0],.2),I(e,9)&&A(!0),(e=I(e,3)||I(e,2)||I(e,1)||I(e,0))&&!t&&(C=1),t=e)},document.onvisibilitychange=onblur=onresize=o,A(!0)})(),(()=>{let s,c,o,i,n,f,m,h,u,g,v,d,p,b=0,S=0,A=0,M=0,I=1,j=2,Y=15,C=()=>K((j?N[g1]:L[28!==b?b:0]).m),k=e=>{1<j?(K(N[g1].m).multiplySelf(N[g1].F),W(0,.9<e1?15:1,-2.4)):(C(),W(S,A,M)),e&&(n=(D-R)/B,f=(O-q)/B),R=D,X=T,q=O},F=(e,t,a,l)=>A1(e,t,I||(U(E(t-e)**.5-a)+1/7)*F1(1.5*l));x=()=>{let e,t,a,l,r=(k(g),Z.r9r(0,0,128,128,6408,5121,V1),(()=>{let t,a,l,r,s,c=0,o=0,i=0,n=0,e=0,f=0,m=-1;for(t=0;t<36;++t)for(a=512*t,l=96;l<416;l+=4)for(r=0;r<2;++r){let e=V1[a+l+r+2];(s=V1[a+l+r])>n&&(n=s),s+e&&(m<0||m===t)&&(m=t,e===g?++c:o&&o!==e||(o=e,++i))}for(g=m<0?0:i>2*c?o:g,c=36;c<128;++c){for(t=m=i=o=0,a=512*c,l=0;l<128;++l)s=V1[r=a+4*l],l<64?s>o&&(o=s):s>i&&(i=s),(s=V1[2+r])>m&&(m=s),s=V1[1+r],64<l?s>o&&(o=s):s>i&&(i=s),(s=V1[3+r])>t&&(t=s);(i-=o)*i>e*e&&(e=i),(t-=m)*t>f*f&&(f=t)}e*=.7,h=U(1-.01*p1(E(e),E(f)),.3),e/=255,n/=255,f/=255,C().invertSelf(),W(e,n,f,0),S+=D,A+=n,M+=O,k()})(),!j&&g===b||(b=g,C().invertSelf(),W(R,X,q),S=D,A=T,M=O,j=j&&(g?0:1)),(R<-20||q<109?-25:-9)>X&&(j=2),1===g&&(N[15].i=R<-15&&q<0?1:0),u=A1(P(u,X,2),X,j||8*E(u-X)),v=F(v,R,.5,1),d=F(d,u,2,1),p=F(p,q,.5,1),i=P(i,l1*(30<g&&g<35),2),Q?(e=j+F1(18),f1=A1(f1,R,e),h1=A1(h1,q,e),m1=A1(m1,1.6+u,e),H=w1(H)):(f1=F(f1,v,1,2+i),h1=F(h1,p+-18+5*i,1,2+i),m1=F(m1,p1(d+U((-60-q)/8,0,20)+13+9*i,6),4,2),e=y1(-6,-E(p-h1)),H=S1(H,90-w1(J1(e,t=v-f1)/G1),I+F1(10)),u1=S1(u1,90-J1(I1(e,t),m1-d)/G1,I+F1(10))),u1=U(u1,-87,87),I=0,e=U(c1,-1),t=U(o1,-1),a=z1(I1(e,t)**.5,.1),J1(e,t));for(a&&(s=90-r/G1),c=S1(c,s,F1(8)),o=P(o,a,10),V(R,.06*h*o*G(18.2*z)+u,q).rotateSelf(0,c),l=0;l<2;++l){let e=9.1*z-J*l;K(L[37].m,V(0)).translateSelf(0,o*U(.45*_(e-J/2))).rotateSelf(o*_(e)*.25/G1,0)}Y=g?5:P(Y,j?13:19-2*y1(0,X+10),2.2),n=g||j?0:P(n,0,3),f=g||j?0:P(f,0,3),e=(m=j?0:P(m,g?7*U(2*a)*h:0,g?9:1))*a*E(e)*_(r),t=m*a*E(t)*G(r),r=Q?(180+H)*G1:0,a=B*(n+(t*G(r)-_(r)*e)),l=B*-Y,e=B*(f+(t*_(r)+G(r)*e)),C().invertSelf(),W(a,l,e,0),S+=D,A+=l,M+=O,k()}})(),requestAnimationFrame(l)}},f=new Image;f.onload=f.onerror=g,f.src=t,(r=>{let L=0,s=()=>{let b=0,e=m=>{let r,h,s,u,c,o,i=0,n=0,g=[],f=new Int32Array(768*m),v=2**(a-9)/m,d=J*2**(l-8)/m,p=q*m&-2;for(let l=0;l<=11;++l)for(let e=0,t=+"000001234556112341234556011111111112011111111112000001111112"[12*L+l];e<32;++e){let a=(32*l+e)*m;for(r=0;r<4;++r)if(u=0,t&&(u=S[t-1].charCodeAt(e+32*r)-40,u+=0<u?106:0),u){if(!(h=g[u])){let l,r,s=0,c=0,o=h=u,i=L<2?e=>e%1*2-1:O1,n=L<2?L<1?e=>e%1<.5?1:-1:e=>(e=e%1*4)<2?e-1:3-e:O1,f=new Int32Array(F+D+N);for(let t=0,a=0;F+D+N>t;++t,++a){let e=1;F>t?e=t/F:F+D>t||(e=(1-(e=(t-F-D)/N))*3**(-T/16*e)),a<0||(a-=4*m,r=.00396*2**((o+M-256)/12),l=.00396*2**((o+Y-256)/12)*(1+(L?0:.0072))),f[t]=80*(i(s+=r*e**(I/32))*A+n(c+=l*e**(C/32))*j+(k?(2*_1()-1)*k:0))*e|0}h=g[h]=f}for(let e=0,t=2*a;h.length>e;++e,t+=2)f[t]+=h[e]}for(let e,t=0;m>t;++t)r=0,h=2*(a+t),((e=f[h])||o)&&(c=.00308*O,1!==L&&4!==L||(c*=_(v*h*J*2)*H/512+.5),c=1.5*_(c),i+=c*n,n+=c*(s=(1-Q/255)*(e-n)-i),e=4===L?n:3===L?s:i,L||(e=(e*=22e-5)<1?-1<e?_(e/4*J*2):-1:1,e/=22e-5),e*=B/32,o=1e-5<e*e,r=e*(1-(s=_(d*h)*R/512+.5)),e*=s),p>h||(r+=f[1+h-p]*X/255,e+=f[h-p]*X/255),E[s=b+h>>1]+=(f[h]=r)/65536,U[s]+=(f[++h]=e)/65536}b+=768*m},S=[["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U","(059<59<A9<AE<AEHAEHMEHMQMQTY(Y","(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y","(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^","Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]","QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"],[".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5","-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5","*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6","5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5","5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"],["9(((9(((9(((9(((9(((9(((9(((9","9(((Q(((Q(((Q"],["9(9(9(9(9(9(9(999(9(9(9(999(9(9","9(9(9(9(9(999(9(((((Q"],["((((Q(((((((Q(((((((Q(((((((Q","Q((Q((Q((Q((Q((Q((((Q"]][L],[A,M,I,j,Y,C,k,F,D,t,T,a,O,Q,B,R,l,X,q,H]=[[69,128,0,143,128,0,0,196,100,36,0,0,149,110,31,47,3,56,2,0],[100,128,0,201,128,0,0,100,144,35,0,6,135,0,32,147,6,0,6,195],[255,116,85,255,116,37,14,64,144,73,99,0,136,15,32,0,0,66,6,0],[0,140,0,0,140,0,81,64,400,47,55,5,239,135,13,176,5,16,4,187],[221,128,64,210,128,64,255,64,144,73,79,7,195,15,21,20,0,9,3,64]][L],N=4*t**2;e(5513),e(4562),e(3891),T1(++L<5?s:r)},E=(Y=new AudioBuffer({numberOfChannels:2,sampleRate:44100,length:5362944})).getChannelData(0),U=Y.getChannelData(1);T1(s)})(()=>{let t=e=>c(_((e/=11)*J),e).rotateSelf(10*e).scaleSelf(1.002-e,1,1.002-e),a=e=>d(o(i(),c(0,-e/2).scale(6,e-1,2.2)),o(i(),c(0,-e/2-6).scale(4,e-3,4)),o(i(32,1),c(0,e/2-9).rotate(90,0,90).scale3d(4))),l=(T1(()=>{let a=0,s=[],c=[],r=[],o=[],i=[],n=[],f=new Int32Array(8),m=new Map,h=new Int32Array(f.buffer,0,5),u=new Float32Array(f.buffer);L.map((e,t)=>{let s,l=e=>{let{x:t,y:a,z:l}=s[e],r=(u[0]=t,u[1]=a,u[2]=l,m.get(e=""+(s.C?h:f)));return void 0!==r?(t=3*r,n[t]=(n[t++]+f[5])/2,n[t]=(n[t++]+f[6])/2,n[t]=(n[t]+f[7])/2):(m.set(e,r=m.size),o.push(t,a,l,u[3]),i.push(f[4]),n.push(f[5],f[6],f[7])),r};for(s of(u[3]=40===t?-12:41===t?-25:t,e.o)){let{x:e,y:t,z:a}=X1(s);f[4]=0|s.u,f[5]=32767*e,f[6]=32767*t,f[7]=32767*a;for(let e=2,t=l(0),a=l(1);s.length>e;++e)r.push(t,a,a=l(e))}e.o=0,e.s=a,e.D=a=r.length}),Z.b11(34962,Z.c1b()),Z.b2v(34962,new Float32Array(o),35044),Z.v7s(0,4,5126,!1,0,0),Z.b11(34962,Z.c1b()),Z.b2v(34962,new Int16Array(n),35044),Z.v7s(1,3,5122,!0,0,0),Z.b11(34962,Z.c1b()),Z.b2v(34962,new Uint32Array(i),35044),Z.v7s(2,4,5121,!0,0,0),Z.b11(34963,Z.c1b()),Z.b2v(34963,new Uint16Array(r),35044),Z.e3x(0),Z.e3x(1),Z.e3x(2);try{let[e,t,a,l,r]=JSON.parse(localStorage.spdnt22);s=e,c=t,g1=a,t1=l,z=r}catch{}N.map((e,t)=>e.g=e.h=e.i=14!==t&&s[t]?1:0),x1.map((e,t)=>e.i=c[t]?1:0),B1(),e1=i1||14!==g1?1:0,T1(g)}),m(11,e=>C1(j1(Y1(18),t(e),n(1,1,.8,.2)).reverse(),j1(Y1(18),t(e+1),n(1,1,.8,.2)),1)).flat()),e=[...o(i(),c(0,-3).scale(11,1.4,3),n(.9,.9,.9,.2)),...o(i(),c(0,-2.2).scale(7.7,.5,4),n(.5,.5,.5,.2)),...m(12,e=>o(i(),S.translate(e-5.5,4.4).scale(.1,.1,2),n(.6,.5,.4,.3))).flat(),...d(o(i(6),S.rotate(90).scale(6,8,6),n(.3,.6,.6,.3)),o(i(4,0,.01),c(0,6).scale(12,2,.75).rotate(0,45),n(.3,.6,.6,.3)),o(i(6),S.rotate(90).scale(5,12,5),n(.3,.6,.6,.3)),...[-5,0,5].map(e=>o(i(5),c(e,2.5).rotate(90,0,36).scale(1.8,10,1.8),n(.3,.6,.6,.3))))],r=d(o(i(),c(0,-.5,1).scale(1.15,1.2,6.5),n(.25,.25,.35,.3)),d(o(i(3),c(0,0,-5.5).scale(3,2),n(.6,.3,.4,.3)),o(i(),c(0,0,-3.65).scale(2.5,3),n(.6,.3,.4,.3))),...[-1,1].map(e=>o(i(),c(1.2*e,-.5,1).scale(.14,.3,6.5),n(.7,.2,0,.3))));h(),s([d1.slice(1)],c(-2).scale3d(3).rotate(90,0)),h(),u(c(-5.4,1.5,-19).rotate(0,-90)),[-15,15].map((e,t)=>{s(i(),c(0,0,t?22:-23).scale(3,1,8),n(.9,.9,.9,.2)),s(i(),c(0,6.3,e).scale(4,.3,1),n(.3,.3,.3,.4)),s(i(),c(0,1,e).scale(3,.2,.35),n(.5,.5,.5,.3))}),s(i(),c(-5,-.2,-26).scale(3.2,1,2.5).skewX(3),n(.8,.8,.8,.2)),s(i(),c(3,1.5,-20).scale(.5,2,5),n(.7,.7,.7,.2)),s(i(),c(-3.4,-.2,-19).scale(2,1,1.5).rotate(0,-90),n(.75,.75,.75,.2)),s(i(5),c(-5.4,0,-19).scale(2,1,2).rotate(0,-90),n(.6,.3,.3,.4)),s(d(U1(o(i(6,0,0,.3),c(8,-3,-4).scale(13,1,13),n(.7,.7,.7,.2)),d(o(i(6,0,0,.3),c(0,-.92).scale(13,2,13),n(.8,.8,.8,.2)),o(i(),S.rotate(0,60).translate(14,.5,-1).scale(2.4,5,2),n(.5,.5,.5,.5))),o(i(),S.rotate(0,60).translate(14.8,-1.46,-1).rotate(-30).translate(0,-1).scale(4.03,1.6,4.5),n(.8,.2,.2,.5)),o(i(6),c(0,-8).scale(9,8,7),n(.2,.1,.4,.5))),o(i(5),S.scale(5,30,5),n(.4,.2,.6,.5)),o(i(5,0,1.5),c(0,1).scale(4.5,.3,4.5),n(.7,.5,.9,.2)),o(i(6),c(15,-1.5,4).scale(3.5,1,3.5),n(.5,.5,.5,.5)))),u(c(15,-2,4)),s(i(),c(-18.65,-3,55).scale(2.45,1.4,2.7),n(.9,.9,.9,.2)),u(c(-55,-1.1,46).rotate(0,90)),s(i(7),c(-57,-2.6,46).scale(4,1,4),n(.8,.8,.8,.3)),s(i(6),c(-61.3,-2.4,49).scale(3,1,5),n(.4,.6,.6,.3)),s(e,c(-53,0,55)),s(i(),c(-88.3,-5.1,55).rotate(-30).scale(5,1.25,4.5),n(.7,.7,.7,.2)),s(i(3,0,-.5),c(-88.4,-3.9,55).rotate(0,-90,17).scale(3,1.45,5.9),n(.8,.8,.8,.2)),s(d(U1(o(i(),c(-100,-2.4,55).scale(8,.9,8),n(.8,.8,.8,.2)),o(i(),c(-113,-2.6,55).scale(6.2,1.1,3).skewX(3),n(.8,.8,.8,.2)),o(i(),c(-100,-2.6,70).scale(3,1.1,7),n(.8,.8,.8,.2)),o(i(),c(-96,-2.6,73).rotate(0,45).scale(3,1.1,5),n(.8,.8,.8,.2)),o(i(6),c(-88.79,-2.6,80.21).scale(6,1.1,6).rotate(0,15),n(.6,.6,.6,.3)),o(i(),c(-100,-1.1,82.39).rotate(-15,0).scale(3,1.1,6),n(.8,.8,.8,.2)),o(i(),c(-100,.42,92).scale(3,1.1,4.1),n(.8,.8,.8,.2))),o(i(8),c(-100,-1,55).scale(7,.9,7),n(.3,.3,.3,.4)),o(i(8),c(-100,-2,55).scale(4,.3,4),n(.4,.4,.4,.5)),o(i(8,0,-3.1),c(-100,-3,55).scale(.4,1,.4),n(.4,.4,.4,.5)))),s(d(o(i(),c(-100,1,63).scale(7.5,4),n(.5,.5,.5,.4)),o(i(),c(-100,0,70).scale(2,2,10),n(.5,.5,.5,.4)),o(i(20,1),c(-100,2,70).scale(2,2,10).rotate(90,0),n(.5,.5,.5,.4)))),d1.map(({x:t,z:a})=>{s(i(6),c(3*t,3,15*a).scale(.7,4,.7),n(.6,.3,.3,.4)),s(i(6),c(7*t-100,-3,7*a+55).scale(1,8.1),n(.6,.15,.15,.8)),[4,-.4].map(e=>s(i(6),c(7*t-100,e,7*a+55).scale(1.3,.5,1.3),n(.4,.2,.2,.8))),s(i(14,1),c(9*t-38.9,-7.3,11*a+17).scale(1,4),n(.25,.25,.25,1)),[1.5,8].map(e=>s(i(17,1),c(9*t-38.9,e-11.3,11*a+17).scale(1.5,.5,1.5),n(.6,.6,.6,.3)))}),m(7,e=>{s(i((23*e+1)%5+5,0,.5),c(5*_(e)-101+e,-2.3-e,44.9-2.8*e).scaleSelf(5+e/2,1+e/6,5+e/3),n(.5-e/17,.5-(1&e)/9,.6,.3))}),s(i(),c(-87,-9.5,24).scale(7,1,3),n(.4,.5,.6,.4)),s(i(4),c(-86,-9.2,27).scale(5,1,5),n(.5,.6,.7,.3)),s(i(12,1),c(-86,-9,31).scale(1.5,1,1.5),n(.3,.3,.4,.1)),u(c(-86,-7.5,31)),s(d(U1(o(i(5),c(0,0,-7).scale(2,1.2,2),n(.2,.4,.7,.3)),o(i(5),S.scale(9,1.2,9),n(0,.2,.3,.5)),o(i(),S.scale(11,1,13),n(.3,.4,.6,.3))),o(i(5),S.scale(5.4,5,5.4),n(0,.2,.3,.5))),c(-38.9,-11.3,17)),u(c(-38.9,-9.6,10)),s(d(U1(o(i(6),c(0,0,-18).scale(15,1.2,15),n(.7,.7,.7,.3)),o(i(),S.scale(4,1.2,6),n(.45,.4,.6,.3))),...m(6,t=>m(6,e=>o(i(6),c(4.6*e-12+2*(1&t),0,4.6*t+2*_(4*e)-32).scale(2,5,2),n(.7,.7,.7,.3)))).flat()),c(-38.9,-11.3,-1)),s(i(5),c(-84,-2,85).scale(4,.8,4).rotate(0,10),n(.8,.1,.25,.4)),u(c(-84,-.7,85).rotate(0,45)),s(d(U1(o(i(),c(26.5,-1.6,10).scale(20,2.08,3)),o(i(),c(26.5,-.5,10).scale(19,2,.5))),...m(4,e=>o(i(),c(13+9*e+(1&e),-.8,9).scale(1.35,1.35,9))),...m(3,e=>o(i(),c(17+9*e,-.8,9).scale(1.35,1.35,9)))),c(-123,.2,-12),n(.5,.5,.6,.2)),u(c(-116,-1.4,-18).rotate(0,180)),s(i(6),c(-116,-2.6,-16.5).scale(3.2,.8,3),n(.6,.5,.7,.2)),s(i(),c(-116,-2.6,-12).scale(3.2,1.1,4).skewX(3),n(.8,.8,.8,.2)),s(i(),c(-115.5,-17,-12).scale(.5,15,2.2),n(.6,.6,.6,.3)),s(i(8),c(-114,-17,-2).scale(2,15,2),n(.6,.6,.6,.3)),s(i(8),c(-79,-17,-2).scale(2,15,2),n(1,1,1,.3)),s(i(),c(-77,-17,-50.5).scale(2.2,15,.5),n(.6,.6,.6,.3)),s(d(o(i(12),c(-77,-14.5,-12).scale(4,17.5,4),n(.7,.7,.7,.2)),o(i(12),c(-77,3.1,-12).scale(3,5,3),n(.4,.5,.6,.2)),o(i(),c(-79,.1,-12).scale(3.5,2,1.3),n(.4,.5,.6,.2)),o(i(),c(-77,.1,-14).scale(1.5,2,2),n(.4,.5,.6,.2)))),s(d(o(i(),c(-93,-5.8,-40).scale(9,1,5),n(.8,.8,.8,.1)),o(i(9),c(-98,-5.8,-40).scale(3,8,3),n(.7,.7,.7,.2)))),s(i(),c(-84.9,-4.3,-40).rotate(12).scale(6,1,3),n(.6,.6,.6,.3)),s(i(9),c(-98,-18.4,-40).scale(2.5,13.5,2.5),n(.5,.5,.5,.3)),u(c(-98,-4.4,-40).rotate(0,90)),[-1,1].map((t,a)=>{s(d(o(i(),c(-4*t,3.5,-.5).scale(4,4,.7),n(.5,.5,.5,.4)),o(i(),S.scale(3,3,10),n(.6,.24,.2,.5)),o(i(32,1),c(0,3,-5).scale(3,4,10).rotate(90,0),n(.6,.24,.2,.5)),o(i(5),c(-5.3*t,7).rotate(90,0).scale(1.7,5,1.7),n(.6,.24,.2,.5)),o(i(5),c(-5.3*t,3.8).rotate(90,0,35).scale(.75,5,.75),n(.6,.24,.2,.5))),c(t-100,.7,97)),s(i(12,1),c(-7.5*t-100,3.7,96).scale(.8,4,.8),n(.6,.24,.2,.5)),[7.2,1.5].map(e=>s(i(15,1),c(-7.5*t-100,e+.7,96).scale(1.1,.5,1.1),n(.5,.24,.2,.4))),s(l,c(-8*t,1,85).scale(1.2,10,1.2).rotate(0,90*t+90)),s(l,c(-5*t-100,1.7,114.5).scale(1.2,10,1.2).rotate(0,90*t-90)),m(5,e=>s(l,c(18.5*(a-.5),0,4.8*e-9.5).rotate(0,180-180*a).scale(1.2,10,1.2)))}),s(d(o(i(),c(-82.07,.8,106).scale(11,.9,2.2),n(.7,.7,.7,.1)),o(i(45,1),c(-81,.7,106).scale3d(7.7),n(.7,.7,.7,.1)))),s(i(),c(-58,1,106).scale(2,.65,2),n(.7,.7,.7,.2)),s(i(),c(-50.7,1,99).scale(2,.65,1),n(.7,.7,.7,.2)),s(i(),c(-42,.4,91).scale(5,1,2.5),n(.7,.7,.7,.3)),s(i(),c(-34.2,.4,91).scale(3,1,3),n(.7,.7,.7,.3)),s(i(5),c(-34,.2,96).scale(3,2,4).rotate(-20,0),n(.2,.5,.5,.6)),u(c(-34,2.7,96).rotate(-12,0)),s(d(U1(o(i(6,0,0,.6),c(-100,.7,105.5).scale(8,1,11),n(.7,.7,.7,.2)),o(i(),c(-101.5,.7,93.5).scale(10.5,1,2),n(.7,.7,.7,.2))),o(i(5),c(-100,.7,113).scale(4,3,4),n(.7,.7,.7,.2)))),m(3,e=>{s(a(16),c(-77,-9,-12*e-20).rotate(0,90),n(.6,.6,.6,.3)),s(a(16),c(12*e-109,-9,-12),n(.6,.6,.6,.3)),s(a(24.7-.7*(1&e)),c(6*e-6,4-(1&e),111-.2*(1&e)),1&e?n(.5,.5,.5,.3):n(.35,.35,.35,.5))}),s(d(o(i(6,0,0,.3),c(0,-.92,95).scale(14,2,14),n(.8,.8,.8,.2)),o(i(5),c(0,0,95).scale3d(6),n(.3,.3,.3,.5)))),u(c(0,1.7,82).rotate(0,180)),s(i(5),c(0,-15.7,82).scale(2.5,17,2.5).rotate(0,35),n(.5,.3,.3,.4)),s(i(6),c(0,16,121).scale(2.5,1,2.1).rotate(0,90),n(.5,.6,.7,.3)),s(i(),c(0,16,127.8).scale(1.5,1,.7),n(.5,.6,.7,.3)),s(i(7),c(0,15.1,133).scale(5,2,5),n(.4,.5,.6,.4)),s(d(U1(o(i(),c(0,16,110.5).scale(12,1,3),n(.5,.3,.3,.4)),o(i(),c(0,16,111).scale(3,1,3.8),n(.5,.3,.3,.4))),o(i(5),c(0,16,103.5).scale(5.5,5,5.5),n(.5,.3,.3,.4)))),v(c(-.5,2.8,-20),[0,0,2.5],[0,-3,2.5]),v(c(0,2.8),[5,10,3],[-5,10,3],...Y1(18).map(({x:e,z:t})=>[7*e,10*t,4.5-2*E(e)])),v(c(0,3,95),...Y1(9).map(({x:e,z:t})=>[9*e,9*t,4])),v(c(0,19,134),[0,0,3.5]),v(c(-38.9,-8.4,-21),[-7,-2.5,6],[6,-3,6],[0,-5,7]),v(c(-89,.2,80),[0,0,6]),v(c(-100,.2,55),[0,0,7.5],[-8,0,3.5],[-12,0,3.5],[-15,0,3.5]),v(c(-115,.2,-12),[0,0,3.5]),v(c(-93,-3,-40).rotate(4),[0,-2,3.5],[0,2,3.5]),h(),s(i(5),c(0,-.2).scale(5,1,5),n(.6,.65,.7,.3)),u(c(0,1.2)),m(2,()=>{h(),d1.map(({x:e,z:t})=>{s(i(11,1),c(4*e,4,4*t).scale(.8,3,.8),n(.5,.3,.7,.6)),s(i(),c(4*e,7,4*t).scale(1,.3),n(.5,.5,.5,.3))}),s(d(o(i(),S.scale(5,1,5),n(.8,.8,.8,.3)),...[-1,1].map(e=>o(i(25,1),c(5*e,.2).rotate(-30*e).scale(4,1,3),n(.8,.8,.8,.3))))),s(i(),c(0,-3).scale(8,2,8),n(.4,.4,.4,.3))}),h(),s(d(U1(o(i(),S.scale(1.5,1,5),n(.9,.9,.9,.2)),o(i(6),S.scale(4,1,5),n(.9,.9,.9,.2)),o(i(),c(0,-2).scale(2,3.2,1.9),n(.3,.8,.5,.5)),o(i(16,1,0,4),S.scale(1,1,1.5).rotate(0,90),n(.9,.9,.9,.2))),o(i(),S.scale(1.3,10,1.3),n(.2,.7,.4,.6)))),v(c(0,2.8),[0,0,4.5]),h(),s(i(3),c(-23,-1.7,55.8).scale(5,.7,8.3),n(.3,.6,.6,.2)),s(i(8),c(-23,-2.2,66.5).scale(1.5,1.2,1.5),n(.8,.8,.8,.2)),s(i(),c(-23,-3,55).scale(5.2,1.7,3),n(.5,.5,.5,.3)),s(i(),c(-23,-2.2,62).scale(3,1,4),n(.5,.5,.5,.3)),u(c(-23,-.5,66.5)),h(),s(i(),c(-22.55,-3,55).scale(1.45,1.4,2.7),n(.7,.7,.7,.2)),s(d(o(i(),S.scale(3,1.4,2.7)),o(i(),S.scale(1.2,8,1.2))),c(-33,-3,55),n(.7,.7,.7,.2)),h(),s(d(o(i(),c(-27,-3,55).scale(3,1.4,2.7),n(.9,.9,.9,.2)),o(i(),c(-27,-3,55).scale(1,3),n(.9,.9,.9,.2)))),s(i(),c(-39,-3,55).scale(3,1.4,2.7),n(.9,.9,.9,.2)),h(),s(i(6),c(-44.5,0,55).rotate(0,0,90).scale(5.9,.5,5.9),n(.7,.7,.7,.4)),h(),[0,12,24].map(e=>s(i(),c(e-76.9,e/-16-10,24).rotate(0,0,-2).skewX(-2).scale(2.8,1.4,3),n(.2,.5,.6,.2))),h(),[6,18].map(e=>s(i(),c(e-76.9,e/-16-10,24).rotate(0,0,-2).skewX(-2).scale(2.8,1.4,3),n(.1,.4,.5,.2))),h(),s(d(U1(o(i(5),c(0,2).scale(5,7,5).skewY(8),n(.2,.4,.5,.5)),o(i(5),c(0,6).scale(1.1,7,1.1).skewY(-8),n(.25,.35,.5,.5)),o(i(5),c(0,9).scale(.6,7,.6).skewY(8),n(.35,.3,.5,.5))),o(i(5),S.scale(4,8,4),n(.2,.4,.5,.5)),o(i(5),c(0,5).scale(1.5,1.5,8).rotate(90,0,35),n(.2,.4,.5,.5))),c(-38.9,-11.3,17)),v(c(-39.1,-.6,17).rotate(11),...Y1(15).map(({x:e,z:t})=>[3*e,3*t,1.2])),h(),m(2,e=>s(r,c(9*e-110+(1&e),1.9,-12))),h(),m(2,e=>s(r,c(9*(e+2)-110+(1&e),1.9,-12))),h(),m(3,e=>s(r,c(9*e-106,1.9,-12))),m(4,e=>{h(),s(i(6),c(-14.6-4.8*e-(2<e?2:0),-e/2.5-.1,-21.5).rotate(0,0,3.5).skewX(3.5).scale(2.6,1,2.5),n(.5-e/8,e/12+.5,.7,.3))}),[n(.1,.55,.45,.2),n(.2,.5,.5,.3),n(.3,.45,.55,.4)].map((e,t)=>{h(),s(i(),c(-23.5,.5,91+6.8*t).scale(1===t?2:3.3,1,3.3),e),2===t&&s(i(),c(-29.1,.4,91).scale(2.1,1,3),n(.7,.7,.7,.3)),1===t&&s(i(),c(-16.1,.5,103.5).rotate(-3.5).scale(3.9,.8,2).skewX(-1),n(.6,.6,.7,.3))}),h(),s(i(5),S.scale(5,1.1,5),n(.5,.3,.3,.4)),s(i(5),S.scale(5.5,.9,5.5),n(.25,.25,.25,.4)),u(c(0,1.5,-1).rotate(0,180)),m(4,t=>{h(),m(7,e=>s(o(i(9,1),c((2<t?3.5:4)*(e/6-.5),3).scale(.2,2<t?4:3,.2),n(.3,.3,.38))))}),h(),s(e),h(),s(i(15,1),c(-7.5).rotate(0,90).scale(3,2.3,3),n(.4,.4,.4,.3)),s(i(10),c(-7.5).rotate(0,90).scale(2,2.5,2),n(.3,.8,.7,.3)),s(i(5),c(-7.5).rotate(0,90).scale(1,3),n(.5,.5,.5,.5)),u(c(-7.5).rotate(0,90).translate(0,3.4).rotate(0,180)),[-1,1].map(e=>s(l,S.rotate(90*e,180,90).translate(0,5).rotate(40).scale(1.3,10,1.3))),s(d(o(i(10),S.scale(6,2,6),n(.1,.6,.5,.3)),o(i(10),S.scale(3.3,6,3.3),n(.1,.6,.5,.5)))),v(c(-5,4),[0,-1.2,1.7],[0,1.2,1.7]),h(),s(i(3),c(0,-3,118.8).scale(.8,.8,8).rotate(90,0,60),n(.5,.3,.3,.4)),[22,30].map(e=>{s(i(6),c(0,16,e+95).scale(3,1,2.3).rotate(0,90),n(.7,.7,.7,.4)),s(i(),c(0,6.2,e+95).scale(.5,11,.5),n(.5,.3,.3,.4))}),h(),s(d(o(i(45,1),S.scale(7.5,1,7.5),n(.45,.45,.45,.2)),o(i(),c(0,0,-5.5).scale(1.5,3,2.7),n(.45,.45,.45,.2)))),s(i(8),c(0,2).scale(3,1.5,3).rotate(0,22),n(.7,.7,.7,.1)),s(i(5),c(0,2).scale(1,2),n(.3,.3,.3,.2)),v(c(0,3),...Y1(14).map(({x:e,z:t})=>[5.6*e,5.6*t,2])),h(),[-1,1].map(e=>s(l,S.rotate(0,90).translate(-5*e,1,-.5).scale(1.2,10,1.2).rotate(0,90*e+90))),s(d(o(i(28,1),c(0,2).scale(7.5,1,7.5),n(.35,0,0,.3)),o(i(),S.scale(9,5,2),n(.3,0,0,.3)))),s(o(i(28,1),S.scale(7.5,1,7.5),n(.45,.45,.45,.2))),s(o(i(5),c(0,1).scale(1,.2),n(.3,.3,.3,.2))),h(),s(d(o(i(28,1),c(0,2).scale(7.5,1,7.5),n(.35,0,0,.3)),o(i(),c(7).scale(9,5,2),n(.3,0,0,.3)),o(i(),c(0,0,7).scale(2,5,9),n(.3,0,0,.3)))),s(o(i(28,1),S.scale(7.5,1,7.5),n(.45,.45,.45,.2))),s(o(i(5),c(0,1).scale(1,.2),n(.3,.3,.3,.2))),h(),s(d(o(i(28,1),c(0,2).scale(7.5,1,7.5),n(.35,0,0,.3)),o(i(),c(7).scale(9,5,2),n(.3,0,0,.3)),o(i(),c(0,0,-7).scale(2,5,9),n(.3,0,0,.3)))),s(o(i(28,1),S.scale(7.5,1,7.5),n(.45,.45,.45,.2))),s(o(i(5),c(0,1).scale(1,.2),n(.3,.3,.3,.2))),m(2,()=>{h(),s(d(o(i(30,1,1.15,1),c(0,-3).scale(3.5,1,3.5),n(.7,.4,.25,.7)),o(i(30,1,1.3,1),c(0,-2.5).scale(2.6,1,3),n(.7,.4,.25,.2)),o(i(),c(4,-1.2).scale3d(2),n(.7,.4,.25,.3)))),u(c(0,-3,4))}),h(),s(k1(20),c(0,1).scale3d(.5),n(1,.3,.4)),s(k1(30),S.scale(.65,.8,.55),n(1,.3,.4)),s(i(),c(0,.9,.45).scale(.15,.02,.06),n(.3,.3,.3)),[-1,1].map(e=>{s(l,S.rotate(0,0<e?180:0).translate(.2,1.32).rotate(-30).scale(.2,.6,.2),n(1,1,.8)),s(o(d(i(15,1),o(i(),c(0,0,1).scale(2,2,.5))),S.rotate(-90,0).scale(.1,.05,.1),n(.3,.3,.3)),c(.2*e,1.2,.4).rotate(0,20*e,20*e))}),[-1,1].map(e=>{h(),s(i(20,1),c(.3*e,-.8).scale(.2,.7,.24),n(1,.3,.4))}),h(),s(k1(30,24,(e,t,a)=>{let l=t/24,r=e*J*2/30,s=_(l**.6*J/2);return e=l*l*_(e*J*14/30)/4,23<t?{x:a.C=0,y:-.5,z:0}:{x:G(r)*s,y:G(l*J)-l-e,z:_(r)*s+_(e*J*2)/4}}),S.scale(.7,.7,.7),n(1,1,1)),[-1,1].map(e=>s(k1(12),c(.16*e,.4,-.36).scale3d(.09))),h(),s(i(6,1),S.scale(.12,1.2,.12),n(.3,.3,.5,.1)),s(i(10),c(0,.8).scale(.2,.3,.2),n(1,.5,.2)),s(i(3),c(0,-1).rotate(90,90).scale(.3,.4,.3),n(.2,.2,.2,.1))})})