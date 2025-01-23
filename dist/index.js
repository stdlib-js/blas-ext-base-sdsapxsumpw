"use strict";var E=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var R=E(function(U,C){
var q=require('@stdlib/number-float64-base-to-float32/dist'),Z=require('@stdlib/math-base-special-floor/dist'),b=128;function O(n,r,e,v,T){var u,i,m,c,t,y,w,a,j,B,s,f,o;if(n<=0)return 0;if(u=T,v===0)return q(n*q(r+e[u]));if(n<8){for(s=0,o=0;o<n;o++)s+=r+e[u],u+=v;return q(s)}if(n<=b){for(i=r+e[u],m=r+e[u+v],c=r+e[u+2*v],t=r+e[u+3*v],y=r+e[u+4*v],w=r+e[u+5*v],a=r+e[u+6*v],j=r+e[u+7*v],u+=8*v,B=n%8,o=8;o<n-B;o+=8)i+=r+e[u],m+=r+e[u+v],c+=r+e[u+2*v],t+=r+e[u+3*v],y+=r+e[u+4*v],w+=r+e[u+5*v],a+=r+e[u+6*v],j+=r+e[u+7*v],u+=8*v;for(s=i+m+(c+t)+(y+w+(a+j)),o;o<n;o++)s+=r+e[u],u+=v;return q(s)}return f=Z(n/2),f-=f%8,q(O(f,r,e,v,u)+O(n-f,r,e,v,u+f*v))}C.exports=O
});var I=E(function(V,F){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=R();function z(n,r,e,v){return k(n,r,e,v,g(n,v))}F.exports=z
});var M=E(function(W,L){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),D=R();A(K,"ndarray",D);L.exports=K
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=M(),_,S=H(G(__dirname,"./native.js"));J(S)?_=P:_=S;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
