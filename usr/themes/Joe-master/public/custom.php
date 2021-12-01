<?php 

    // 收款设置
    $ZNPaySet = new Typecho_Widget_Helper_Form_Element_Select(
        'ZNPaySet',
        array(
            'on' => '开启（默认）',
            'off' => '关闭',
        ),
        'on',
        '是否启用执念打赏功能',
        '介绍：开启后，文章底部展示打赏功能 <br>
        详情可查看 <a href="https://zhinianblog.com/archives/892/">https://zhinianblog.com/archives/892/</a>
        '
    );
    $ZNPaySet->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($ZNPaySet->multiMode());
    
    
	$ZNAlipay = new Typecho_Widget_Helper_Form_Element_Text(
        'ZNAlipay',
        NULL,
        NULL,
        '支付宝收款码',
        '介绍：填写此处，打赏界面展示支付宝收款码，图片地址 <br />'
    );
    $ZNAlipay->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($ZNAlipay->multiMode());
    
    $ZNWeChat = new Typecho_Widget_Helper_Form_Element_Text(
        'ZNWeChat',
        NULL,
        NULL,
        '微信收款码',
        '介绍：填写此处，微信界面展示微信收款码，图片地址 <br />'
    );
    $ZNWeChat->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($ZNWeChat->multiMode());
    
    $ZNQqPay = new Typecho_Widget_Helper_Form_Element_Text(
        'ZNQqPay',
        NULL,
        NULL,
        'QQ收款码',
        '介绍：填写此处，QQ界面展示QQ收款码，图片地址 <br />'
    );
    $ZNQqPay->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($ZNQqPay->multiMode());


    $JBarragerStatus = new Typecho_Widget_Helper_Form_Element_Select(
        'JBarragerStatus',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启弹幕功能（仅限PC）',
        '介绍：开启后，网站将会显示评论弹幕功能，该功能采用CSS动画引擎，并非传统JS操作DOM，无任何性能消耗。'
    );
    $JBarragerStatus->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($JBarragerStatus->multiMode());
    
    $JPageStatus = new Typecho_Widget_Helper_Form_Element_Select(
        'JPageStatus',
        array('default' => '按钮切换形式（默认）', 'ajax' => '点击加载形式'),
        'default',
        '选择首页的分页形式',
        '介绍：选择一款您所喜欢的分页形式'
    );
    $JPageStatus->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($JPageStatus->multiMode());
    
    // 在线人数设置
    $onlinePersion = new Typecho_Widget_Helper_Form_Element_Select(
        'onlinePersion',
        array(
            'on' => '开启（默认）',
            'off' => '关闭',
        ),
        'on',
        '是否启用在线人数统计',
        '介绍：开启后，文章底部展示当前在线人数'
    );
    $onlinePersion->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($onlinePersion->multiMode());
    
    // 文章阅读时长设置
    $onlineTime = new Typecho_Widget_Helper_Form_Element_Select(
        'onlineTime',
        array(
            'off' => '关闭（默认）',
            'on' => '开启',
        ),
        'off',
        '是否启用文章阅读时长统计',
        '介绍：开启后，文章底部展示文章字数，预计阅读时长和已阅读时长'
    );
    $onlineTime->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($onlineTime->multiMode());
    
    // 手机端登录
    $login4Phone = new Typecho_Widget_Helper_Form_Element_Select(
        'login4Phone',
        array(
            'off' => '关闭（默认）',
            'on' => '开启',
        ),
        'off',
        '是否启用手机端登录功能',
        '介绍：开启后，手机端侧边栏将展示登录功能和登录后的操作'
    );
    $login4Phone->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($login4Phone->multiMode());
    
    // 全站置灰
    $websiteChgGray = new Typecho_Widget_Helper_Form_Element_Select(
        'websiteChgGray',
        array(
            'off' => '关闭（默认）',
            'on' => '开启',
        ),
        'off',
        '是否启用全站置灰',
        '介绍：开启后，网站所有信息全部变成黑白'
    );
    $websiteChgGray->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($websiteChgGray->multiMode());
    
    $JPrevent = new Typecho_Widget_Helper_Form_Element_Select(
        'JPrevent',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '请选择是否开启QQ跳转浏览器功能',
        '介绍：开启后，如果在QQ里打开网站，则会提示跳转浏览器打开'
    );
    $JPrevent->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($JPrevent->multiMode());
    
    // 互动读者
    $JactiveUsers = new Typecho_Widget_Helper_Form_Element_Select(
        'JactiveUsers',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启互动读者',
        '介绍：显示评论相关用户'
    );
    $JactiveUsers->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($JactiveUsers);
    
    // 纯数字评论无需审核
    $CommentPass4Num = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentPass4Num',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启纯数字评论无需审核',
        '介绍：开启后，如果评论都是数字则无需审核'
    );
    $CommentPass4Num->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentPass4Num);
    
    
    $CnzzId = new Typecho_Widget_Helper_Form_Element_Text(
        'CnzzId',
        NULL,
        NULL,
        'cnzz站点ID',
        '介绍：填写此处用于展示cnzz统计，申请地址 https://www.umeng.com/web'
    );
    $CnzzId->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CnzzId->multiMode());
    
    $CnzzType = new Typecho_Widget_Helper_Form_Element_Select(
        'CnzzType',
        array(
            'off' => '关闭（默认）',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&web_id=CnzzId' => '文字形式',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&show=pic' => '图片样式1',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&show=pic1' => '图片样式2',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&show=pic2' => '图片样式3',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&online=2' => '在线人数',
            'https://s4.cnzz.com/z_stat.php?id=CnzzId&online=1&show=line' => '横排数据显示',
        ),
        'off',
        '选择cnzz样式',
        '介绍：开启时请填写cnzz站点ID'
    );
    $CnzzType->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CnzzType->multiMode());
    
    // 海报
    $Haibao = new Typecho_Widget_Helper_Form_Element_Select(
        'Haibao',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启底部海报功能',
        '介绍：开启后，文章底部展示生成海报按钮；特别注意：安装插件之后才可以正常使用，插件下载地址 https://zhinianblog.com/archives/993/'
    );
    $Haibao->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($Haibao);
    
    // 今日文章
    $TodayArchive4Phone = new Typecho_Widget_Helper_Form_Element_Select(
        'TodayArchive4Phone',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启手机侧边栏今日文章',
        '介绍：开启后，手机端侧边栏展示今日文章数量'
    );
    $TodayArchive4Phone->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($TodayArchive4Phone);
    
    // 评论楼层
    $CommentFloor = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentFloor',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启评论楼层',
        '介绍：开启后，评论右侧展示该评论所属楼层'
    );
    $CommentFloor->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentFloor);
    
    // 评论等级
    $CommentLevel = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentLevel',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启评论等级',
        '介绍：开启后，评论部分展示评论者的等级'
    );
    $CommentLevel->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentLevel);
    
    // 复制内容弹窗提醒
    $CopyRightText = new Typecho_Widget_Helper_Form_Element_Text(
        'CopyRightText',
        NULL,
        NULL,
        '网站复制时提醒内容',
        '介绍：填写此处，有人复制网站内容则弹出该提示 <br />'
    );
    $CopyRightText->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CopyRightText->multiMode());
    
    // 百度收录
    $BaiduDomain = new Typecho_Widget_Helper_Form_Element_Select(
        'BaiduDomain',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启百度收录查询',
        '介绍：开启后，底部展示百度收录条数'
    );
    $BaiduDomain->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($BaiduDomain);
    
    // 版权声明
    $CopyRightContent = new Typecho_Widget_Helper_Form_Element_Select(
        'CopyRightContent',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启文章底部版权声明',
        '介绍：开启后，文章底部展示版权声明及转载提示'
    );
    $CopyRightContent->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CopyRightContent);
    
    // 前台审核评论
    $Comments4Reception = new Typecho_Widget_Helper_Form_Element_Select(
        'Comments4Reception',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启前台评论审核功能',
        '介绍：开启后，文章底部评论区域显示删除和垃圾按钮，可以对该条评论做删除等操作'
    );
    $Comments4Reception->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($Comments4Reception);
    
    // 友链样式
    $FriendLinkStyle = new Typecho_Widget_Helper_Form_Element_Select(
        'FriendLinkStyle',
        array(
            '01' => '样式1',
            '02' => '样式2',
        ),
        '01',
        '选择友链样式',
        '介绍：可以根据个人选择不同的友链样式'
    );
    $FriendLinkStyle->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($FriendLinkStyle->multiMode());
    
    // 友链随机排序
    $FriendsSort = new Typecho_Widget_Helper_Form_Element_Select(
        'FriendsSort',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启友链随机排序',
        '介绍：开启后，友链界面所有友链随机排序'
    );
    $FriendsSort->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($FriendsSort);
    
    
    // 导航
    $Navigation1Name = new Typecho_Widget_Helper_Form_Element_Text(
        'Navigation1Name',
        NULL,
        NULL,
        '导航栏目一名称',
        '介绍：填写后将展示导航栏目一 <br />'
    );
    $Navigation1Name->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation1Name->multiMode());
    
    
    $Navigation1Cont = new Typecho_Widget_Helper_Form_Element_Textarea(
        'Navigation1Cont',
        NULL,
        '百度 || https://baidu.com || https://www.baidu.com/img/flexible/logo/pc/result.png || 中国最大的搜索引擎',
        '导航栏目一（非必填）',
        '介绍：用于填写导航栏目一内容 <br />
         注意：您需要先增加导航页面（新增独立页面-右侧模板选择个人导航），该项才会生效 <br />
         格式：网站名称 || 网站地址 || 网站地址 || 网站简介 <br />
         其他：一行一个，一行代表一个网站'
    );
    $Navigation1Cont->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation1Cont);


    $Navigation2Name = new Typecho_Widget_Helper_Form_Element_Text(
        'Navigation2Name',
        NULL,
        NULL,
        '导航栏目二名称',
        '介绍：填写后将展示导航栏目二 <br />'
    );
    $Navigation2Name->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation2Name->multiMode());
    
    
    $Navigation2Cont = new Typecho_Widget_Helper_Form_Element_Textarea(
        'Navigation2Cont',
        NULL,
        '百度 || https://baidu.com || https://www.baidu.com/img/flexible/logo/pc/result.png || 中国最大的搜索引擎',
        '导航栏目二（非必填）',
        '介绍：用于填写导航栏目二内容 <br />
         注意：您需要先增加导航页面（新增独立页面-右侧模板选择个人导航），该项才会生效 <br />
         格式：网站名称 || 网站地址 || 网站地址 || 网站简介 <br />
         其他：一行一个，一行代表一个网站'
    );
    $Navigation2Cont->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation2Cont);
    
    $Navigation3Name = new Typecho_Widget_Helper_Form_Element_Text(
        'Navigation3Name',
        NULL,
        NULL,
        '导航栏目三名称',
        '介绍：填写后将展示导航栏目三 <br />'
    );
    $Navigation3Name->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation3Name->multiMode());
    
    
    $Navigation3Cont = new Typecho_Widget_Helper_Form_Element_Textarea(
        'Navigation3Cont',
        NULL,
        '百度 || https://baidu.com || https://www.baidu.com/img/flexible/logo/pc/result.png || 中国最大的搜索引擎',
        '导航栏目三（非必填）',
        '介绍：用于填写导航栏目三内容 <br />
         注意：您需要先增加导航页面（新增独立页面-右侧模板选择个人导航），该项才会生效 <br />
         格式：网站名称 || 网站地址 || 网站地址 || 网站简介 <br />
         其他：一行一个，一行代表一个网站'
    );
    $Navigation3Cont->setAttribute('class', 'joe_content joe_navigation');
    $form->addInput($Navigation3Cont);
    
    // 友链管理
    $linkManage = new Typecho_Widget_Helper_Form_Element_Select(
        'linkManage',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启友链管理，开启前请务必开启插件，否则友链界面将报错',
        '介绍：开启后，友链界面可以展示通过提交审批通过的链接'
    );
    $linkManage->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($linkManage);
    
    // 评论图片
    $CommentImg = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentImg',
        array('on' => '开启（默认）', 'off' => '关闭'),
        'on',
        '是否开启评论图片功能',
        '介绍：开启后，评论区域可以选择图片进行评论'
    );
    $CommentImg->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentImg);
    
    // 图床token
    $TuChuangToken = new Typecho_Widget_Helper_Form_Element_Text(
        'TuChuangToken',
        NULL,
        NULL,
        '图床Token',
        '介绍：填写此处，编辑器上传图床按钮可以将图片自动上传到图床并自动返回链接到编辑器 <br/>
        token申请地址 <a href="https://img.zhinianblog.com/">https://img.zhinianblog.com/</a>'
    );
    $TuChuangToken->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($TuChuangToken->multiMode());
    
    // 是否开启回复可见全部显示
    $CommentShow = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentShow',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启回复可见全部显示',
        '介绍：开启后，所有设置的回复可见均可以正常显示'
    );
    $CommentShow->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentShow);
    
    // 跳转页地址
    $JumpPageUrl = new Typecho_Widget_Helper_Form_Element_Text(
        'JumpPageUrl',
        NULL,
        NULL,
        '跳转页地址',
        '介绍：填写此处，点击友链先打开跳转页，等待3秒后自动打开友链网站 <br/>
        样例(可填写以下地址)： https://zhinianblog.com/usr/themes/Joe-master/library/jump/jumpPage.php?url='
    );
    $JumpPageUrl->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($JumpPageUrl->multiMode());
    
    $FooterNavs = new Typecho_Widget_Helper_Form_Element_Textarea(
        'FooterNavs',
        NULL,
        NULL,
        '底部导航栏自定义菜单（非必填）',
        '介绍：用于自定义底部导航栏链接 <br />
         格式：跳转文字 || 跳转链接 || svg图标，大小30左右（在 https://www.iconfont.cn/ 中获取）<br />
         其他：一行一个，一行代表一个菜单 <br />
         例如：<br />
            百度一下 || https://baidu.com || svg图标代码 <br />
            百度一下 || https://baidu.com || svg图标代码
         '
    );
    $FooterNavs->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($FooterNavs);
    
    // 首页广告样式
    $IndexAdStyle = new Typecho_Widget_Helper_Form_Element_Select(
        'IndexAdStyle',
        array(
            '01' => '平铺',
            '02' => '轮播',
        ),
        '01',
        '选择首页广告显示样式',
        '介绍：可以根据个人选择不同的首页广告样式'
    );
    $IndexAdStyle->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($IndexAdStyle->multiMode());
    
    // 头像呼吸灯
    $AvatarLight = new Typecho_Widget_Helper_Form_Element_Select(
        'AvatarLight',
        array('off' => '关闭（默认）', 'on' => '开启'),
        'off',
        '是否开启头像呼吸灯',
        '介绍：开启后，所有头像都会显示呼吸灯效果'
    );
    $AvatarLight->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($AvatarLight);
    
    // 评论验证码功能
    $CommentGeetest = new Typecho_Widget_Helper_Form_Element_Select(
        'CommentGeetest',
        array('on' => '开启（默认）', 'off' => '关闭'),
        'on',
        '是否开启评论验证码功能',
        '介绍：开启后，评论需要输入验证码才能提交'
    );
    $CommentGeetest->setAttribute('class', 'joe_content joe_custom');
    $form->addInput($CommentGeetest);
?>