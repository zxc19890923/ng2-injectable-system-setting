其实修改数据是在数据库中配置的，服务可以实现组件和组件之间的数据传输。和@Input / @Output一样的效果
1. system.injectable.ts

import {Injectable} from "@angular/core";
@Injectable()
export class SystemInjectable {
  public color = "red";

  getTheme() {
    return this.color;
  }

  setTheme() {
    return this.color = "yellow";
  }
}

2. app.module.ts中引入
 
 providers: [SystemComponent]
 
3. 不同组件中使用
import {Component} from "@angular/core";
import {SystemInjectable} from "./system.server";
@Component({
  selector: "my-system",
  templateUrl: "./app/system.html"
})
export class SystemComponent {
  theme: string;
  constructor(public sys: SystemInjectable) {
    this.theme = sys.setTheme();
  }
}
------------------------------
  constructor(public sys:SystemInjectable) {
  
  }
  ngOnInit() {
    this.theme = this.sys.getTheme();
  }
