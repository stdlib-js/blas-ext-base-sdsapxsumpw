"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var u=i(function(k,n){
var f=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/blas-ext-base-sdssumpw/dist').ndarray;function y(e,r,s,a,x){return e<=0?0:f(e*r+c(e,s,a,x))}n.exports=y
});var v=i(function(z,p){
var w=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,s,a){return j(e,r,s,a,w(e,a))}p.exports=l
});var o=i(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=u();R(q,"ndarray",_);d.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
