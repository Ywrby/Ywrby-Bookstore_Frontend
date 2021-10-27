# 深度阅读理解系统数据库设计

## 主要实体类

### 班级数据表: sys_cls
数据类型|数据大小|数据名称|描述|是否主键|外键
---|---|---|---|---|---
int|-|clsId|每个班级唯一标识符，用于确定具体班级|y|n
varchar|50|clsName|班级具体名称，例如：19级计算机科学与技术3班|n|n

### 文章信息表: sys_article
数据类型|数据大小|数据名称|描述|是否主键|外键
---|---|---|---|---|---
int|-|articleId|文章唯一标识符，用于确定具体文章|y|n
varchar|50|articleName|文章或论文名称，例如：《故事新编》，书名号可省略|n|n
varchar|50|author|文章或论文的作者，例如：鲁迅|n|n
varchar|200|articleFilePath|文章的文件保存路径，用于获取原文内容|n|n
varchar|1000|describe|文章简介，文章内容简单描述|n|n
int|-|readingPhase|阅读阶段，0表示课前阅读，1表示课后阅读|n|n
date|-|startDate|阅读任务开始日期|n|n
date|-|endDate|阅读任务结束日期|n|n
int|-|clsId|文章所归属的课程|n|sys_cls.clsId


### 学生信息表: sys_stu
数据类型|数据大小|数据名称|描述|是否主键|外键
---|---|---|---|---|---
int|-|stuId|学生ID，学生的唯一标识符|y|n
varchar|20|stuName|学生姓名|n|n

### 学生班级中间表: sys_stu_cls
数据类型|数据大小|数据名称|描述|是否主键|外键
---|---|---|---|---|---
int|-|clsId|学生所属班级的班级ID|n|sys_cls.clsId
int|-|stuId|学生ID|n|sys_stu.stuId

### KWL策略表格信息表: sys_kwl
数据类型|数据大小|数据名称|描述|是否主键|外键
---|---|---|---|---|---
int|-|stuId|学生ID|n|sys_stu.stuId
int|-|articleId|文章ID|n|sys_article.articleId
JSON|-|pre

