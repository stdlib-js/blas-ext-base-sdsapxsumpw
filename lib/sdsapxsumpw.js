/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var sum = require( './ndarray.js' );


// MAIN //

/**
* Adds a constant to each single-precision floating-point strided array element and computes the sum using pairwise summation with extended accumulation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - constant
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = sdsapxsumpw( 3, 5.0, x, 1 );
* // returns 16.0
*/
function sdsapxsumpw( N, alpha, x, stride ) {
	var ix;
	var s;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	if ( N === 1 || stride === 0 ) {
		return float64ToFloat32( alpha + x[ 0 ] );
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			s += alpha + x[ ix ];
			ix += stride;
		}
		return float64ToFloat32( s );
	}
	return sum( N, alpha, x, stride, ix );
}


// EXPORTS //

module.exports = sdsapxsumpw;
