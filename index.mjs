// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function i(r,e,d,o,f){var m,a,l,j,p,u,v,b,h,c,x,g,y;if(r<=0)return 0;if(m=f,0===o)return t(r*t(e+d[m]));if(r<8){for(x=0,y=0;y<r;y++)x+=e+d[m],m+=o;return t(x)}if(r<=n){for(a=e+d[m],l=e+d[m+o],j=e+d[m+2*o],p=e+d[m+3*o],u=e+d[m+4*o],v=e+d[m+5*o],b=e+d[m+6*o],h=e+d[m+7*o],m+=8*o,c=r%8,y=8;y<r-c;y+=8)a+=e+d[m],l+=e+d[m+o],j+=e+d[m+2*o],p+=e+d[m+3*o],u+=e+d[m+4*o],v+=e+d[m+5*o],b+=e+d[m+6*o],h+=e+d[m+7*o],m+=8*o;for(x=a+l+(j+p)+(u+v+(b+h));y<r;y++)x+=e+d[m],m+=o;return t(x)}return g=s(r/2),t(i(g-=g%8,e,d,o,m)+i(r-g,e,d,o,m+g*o))}function d(r,t,s,n){return i(r,t,s,n,e(r,n))}r(d,"ndarray",i);export{d as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
