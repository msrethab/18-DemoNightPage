(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavController', NavController);

    NavController.$inject = ['$q'];

    /* @ngInject */
    function NavController($q) {
        var vm = this;
        vm.title = 'NavController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();