//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//angualr核心模块
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//根组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [  //配置当前项目运行的组件
    AppComponent, HeaderComponent
  ],
  imports: [   //配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  //配置项目所需的服务
  bootstrap: [AppComponent]  //指定应用的主视图（根组件）
})
//跟模块不需要导出任何东西，因为其他组件不需要导入跟模块
export class AppModule { }
