"use strict";var F=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var R=F(function(U,B){
var m=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-floor/dist'),g=128;function O(n,r,e,v,f){var u,s,c,t,w,y,j,a,E,_,i,q,o;if(n<=0)return 0;if(n===1||v===0)return m(r+e[f]);if(u=f,n<8){for(i=0,o=0;o<n;o++)i+=r+e[u],u+=v;return m(i)}if(n<=g){for(s=r+e[u],c=r+e[u+v],t=r+e[u+2*v],w=r+e[u+3*v],y=r+e[u+4*v],j=r+e[u+5*v],a=r+e[u+6*v],E=r+e[u+7*v],u+=8*v,_=n%8,o=8;o<n-_;o+=8)s+=r+e[u],c+=r+e[u+v],t+=r+e[u+2*v],w+=r+e[u+3*v],y+=r+e[u+4*v],j+=r+e[u+5*v],a+=r+e[u+6*v],E+=r+e[u+7*v],u+=8*v;for(i=s+c+(t+w)+(y+j+(a+E)),o;o<n;o++)i+=r+e[u],u+=v;return m(i)}return q=b(n/2),q-=q%8,m(O(q,r,e,v,u)+O(n-q,r,e,v,u+q*v))}B.exports=O
});var K=F(function(V,I){
var C=require('@stdlib/number-float64-base-to-float32/dist'),k=R();function z(n,r,e,v){var f,u,s;if(n<=0)return 0;if(n===1||v===0)return C(r+e[0]);if(v<0?f=(1-n)*v:f=0,n<8){for(u=0,s=0;s<n;s++)u+=r+e[f],f+=v;return C(u)}return k(n,r,e,v,f)}I.exports=z
});var S=F(function(W,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=K(),D=R();A(L,"ndarray",D);M.exports=L
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=S(),T,Z=H(G(__dirname,"./native.js"));J(Z)?T=P:T=Z;module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
