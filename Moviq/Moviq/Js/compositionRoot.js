/**
*   Composition Root
*/
/*jslint plusplus: true*/
/*globals require, define*/
require(['routeEngine', 'views/viewEngine', 'config', 'utils', 'controllers/homeController',
         'views/codropsGridVw', 'controllers/demoController', 'jquery', 'ko', 'sammy'],
        function (routeEngineCtor, viewEngineCtor, configCtor, utilsCtor, homeControllerCtor,
                   codropsGridVwCtor, demoControllerCtor, $, ko, sammy) {
        "use strict";

        var config,
            utils,
            viewEngine,
            routeEngine,
            homeController,
            demoController,
            CodropsGridVw,
            movieModels,
            movies;
        
            
        config = configCtor.init();
        utils = utilsCtor.init();
        routeEngine = routeEngineCtor.init($, sammy, config, utils);
        define('routes', function () { return routeEngine; });
        viewEngine = viewEngineCtor.init(ko);
        define('views', function () { return viewEngine; });
            
//        movieModels = movieModelsCtor.init(ko);
//        movies = moviesCtor.init(ko, movieModels);
        CodropsGridVw = codropsGridVwCtor.init(ko);
        
        // controllers
        demoController = demoControllerCtor.init(routeEngine, viewEngine, CodropsGridVw);
        homeController = homeControllerCtor.init(routeEngine, viewEngine);
            
        ko.applyBindings(viewEngine.mainVw, $('#main')[0]);
        routeEngine.listen();
    
    });