//
// [BookVn] client/app/bkvn-image/bkvn-image.directive.js
//
// Implements directive 'bkvn-image'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnImage', function () {
    return {
      scope: {
        num: '<'
      },
      templateUrl: 'app/bkvn-image/bkvn-image.html',
      restrict: 'E',
      controller: function ($scope, $stateParams) {
        /**
         * Convert number to string prefixed with zeros upto 3 digits.
         * If 'num' is null, return 'x'
         */
        var zeroPrefix = function(num) {
          if (num === null) {
            return 'x';
          }

          var str = num.toString();

          var i = str.length;

          while (i < 3) {
            str = '0' + str;
            i++;
          }

          return str;
        };


        /**
         * Converts image number to file name.
         */
        var toName = function (num) {
          return 'pg-' + zeroPrefix(num) + '.jpg';
        };

        $scope.url = '/cab/' + $stateParams.sub + '/' + $stateParams.bk  + '/' + toName($scope.num);
      },
      link: function(scope, elem) {
        //
        // Get 'raw' DOM canvas object to access WebAPI
        //
        var canvas = elem[0].querySelector('#bkvn-canvas');
        var context = canvas.getContext('2d');

        //
        // Fill canvas in the parent container
        //
        canvas.style.width ='100%';
        canvas.style.height='100%';
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        //
        // Scaling information
        //
        var CurrentScale = 1.0;

        var image = new Image();
        image.src = scope.url;

        /**
         * Renders an image on the canvas
         */
        var renderImage = function () {
          //
          // Clear the canvas
          //
          context.clearRect(0, 0, canvas.width, canvas.height);

          //
          // Save drawing state of the canvas
          //
          context.save();

          //
          // Move origin to center of the canvas
          //
          context.translate(canvas.width/2, canvas.height/2);

          //
          // Scale the image
          //
          context.scale(CurrentScale, CurrentScale);

          //
          // Draw image 'centered' in the canvas
          //
          context.drawImage(image, -image.width/2, -image.height/2);

          //
          // Restore drawing state of the canvas
          //
          context.restore();
        };

        /**
         * Applies zoom on the scroll event.
         */
        var zoomImage = function (event) {
          var SCALE_FACTOR = 0.1;

          //
          // Adjust scaling factor
          //
          // Chrome events contain attribute 'wheelDelta'.
          // Firefox events contain attribute detail.
          //
          // However, both use opposite signs for the values.
          // Their delta speeds aren't same either.
          //
          // Zoom is normalized by using a fixed scaling factor.
          //
          if ((event.wheelDelta > 0) || (event.detail < 0)) {
            CurrentScale -= SCALE_FACTOR;      // Scroll-down = Zoom-out

            if (CurrentScale < SCALE_FACTOR) {
              CurrentScale = SCALE_FACTOR;
            }
          } else {
            CurrentScale += SCALE_FACTOR;      // Scroll-up = Zoom-in
          }

          renderImage();

          event.preventDefault();

          return false;
        };

        // For Chrome
        angular.element(canvas).bind('mousewheel', zoomImage);

        // For Firefox
        angular.element(canvas).bind('DOMMouseScroll', zoomImage);

        image.onload = renderImage;
      }
    };
  });
