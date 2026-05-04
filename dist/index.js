"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(k,n){
var f=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/blas-ext-base-sdssumpw/dist').ndarray;function y(r,e,a,s,x){return r<=0?0:f(r*e+c(r,a,s,x))}n.exports=y
});var v=i(function(z,p){
var w=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(r,e,a,s){return j(r,e,a,s,w(r,s))}p.exports=l
});var o=i(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=u();R(q,"ndarray",_);d.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
