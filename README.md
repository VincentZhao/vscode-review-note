# Review 记录生成插件 For Visual Studio Code

用于生成 Review 记录的便携工具。

适用于 Visual Studio Code。

## 使用说明

在 VS Code 中 review 代码。选择要指摘的部分，按默认快捷键 `Ctrl+Shift+Alt+r` （为方便记忆，r 代表 review），review 记录便进入了剪切板。格式如下。

```
========================================
■app\controllers\renting_repairkits_controller.rb
----------------------------------------
●L.15-17
>     @form.dept_code = params[:dept_code]
>     @rental_status = repairkit_admin_department.repairkits.enabled.rental.merge(@form.search_condition).
>                      order("rental_date, repairkits.product_no")


----------------------------------------
```
