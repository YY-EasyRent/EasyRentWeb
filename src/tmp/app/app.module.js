"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var login_module_1 = require("./login/login.module");
var todolist_module_1 = require("./todolist/todolist.module");
var post_module_1 = require("./post/post.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            shared_1.NavbarModule,
            home_module_1.HomeModule,
            login_module_1.LoginModule,
            todolist_module_1.TodolistModule,
            post_module_1.PostModule,
            app_routing_1.routing
        ],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELHFEQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsa0RBQWdEO0FBa0JoRCxJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxnQ0FBYTtZQUNiLHFCQUFZO1lBQ1osd0JBQVU7WUFDViwwQkFBVztZQUNYLGdDQUFjO1lBQ2Qsd0JBQVU7WUFDVixxQkFBTztTQUNWO1FBQ0QsU0FBUyxFQUFFLENBQUUsNkJBQWEsRUFBRSxpQ0FBbUIsQ0FBRTtRQUNqRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBUFBfUFJPVklERVJTIH0gZnJvbSAnLi9hcHAucHJvdmlkZXJzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBSb3V0aW5nUHJvdmlkZXJzLCByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgVG9kb2xpc3RNb2R1bGUgfSBmcm9tICcuL3RvZG9saXN0L3RvZG9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQb3N0TW9kdWxlIH0gZnJvbSAnLi9wb3N0L3Bvc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIE5hdmJhck1vZHVsZSxcbiAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgTG9naW5Nb2R1bGUsXG4gICAgICAgIFRvZG9saXN0TW9kdWxlLFxuICAgICAgICBQb3N0TW9kdWxlLFxuICAgICAgICByb3V0aW5nXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQVBQX1BST1ZJREVSUywgYXBwUm91dGluZ1Byb3ZpZGVycyBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
