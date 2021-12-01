<?php if ($this->options->JPrevent === 'on') : ?>
    <?php $this->need('public/prevent.php'); ?>
<?php endif; ?>
<?php $this->need('public/config.php'); ?>
<meta charset="utf-8" />
<meta name="renderer" content="webkit" />
<meta name="format-detection" content="email=no" />
<meta name="format-detection" content="telephone=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta itemprop="image" content="<?php $this->options->JShare_QQ_Image() ?>" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover">
<link rel="shortcut icon" href="<?php $this->options->JFavicon() ?>" />
<title><?php $this->archiveTitle(array('category' => '分类 %s 下的文章', 'search' => '包含关键字 %s 的文章', 'tag' => '标签 %s 下的文章', 'author' => '%s 发布的文章'), '', ' - '); ?><?php $this->options->title(); ?></title>
<?php if ($this->is('single')) : ?>
	<meta name="keywords" content="<?php echo $this->fields->keywords ? $this->fields->keywords : htmlspecialchars($this->_keywords); ?>" />
	<meta name="description" content="<?php echo $this->fields->description ? $this->fields->description : htmlspecialchars($this->_description); ?>" />
	<?php $this->header('keywords=&description='); ?>
<?php else : ?>
	<?php $this->header(); ?>
<?php endif; ?>
<link rel="stylesheet" href="<?php $this->options->themeUrl('assets/css/joe.mode.min.css'); ?>">
<link rel="stylesheet" href="<?php $this->options->themeUrl('assets/css/joe.normalize.min.css'); ?>">
<link rel="stylesheet" href="<?php $this->options->themeUrl('assets/css/joe.global.min.css'); ?>">
<link rel="stylesheet" href="<?php $this->options->themeUrl('assets/css/joe.responsive.min.css'); ?>">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/scroll/joe.scroll.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.0/lazysizes.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/sketchpad/joe.sketchpad.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.js"></script>
<?php if ($this->options->JAside_3DTag === 'on') : ?>
	<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.2.3/plugin/3dtag/3dtag.min.js"></script>
<?php endif; ?>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/smooth/joe.smooth.js" async></script>
<?php if ($this->options->JCursorEffects && $this->options->JCursorEffects !== 'off') : ?>
	<script src="<?php $this->options->themeUrl('assets/cursor/' . $this->options->JCursorEffects); ?>" async></script>
<?php endif; ?>
<script src="<?php $this->options->themeUrl('assets/js/joe.global.js?v=7.2.9'); ?>"></script>
<script src="<?php $this->options->themeUrl('assets/js/joe.short.min.js?v=7.2.9'); ?>"></script>
<?php if ($this->options->JBarragerStatus === 'on') : ?>
    <link rel="stylesheet" href="<?php $this->options->themeUrl('library/joe.barrager/joe.barrager.css'); ?>">
<?php endif; ?>
<?php $this->options->JCustomHeadEnd() ?>
<?php if ($this->options->websiteChgGray === 'on') : ?>
    <style>html { filter: grayscale(1); }</style>
<?php endif; ?>
<link rel="stylesheet" href="<?php $this->options->themeUrl('assets/css/custom.css'); ?>">
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.js"></script>
<script src="<?php $this->options->themeUrl('assets/js/custom.js'); ?>"></script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5381169853607971"
     crossorigin="anonymous"></script>
<?php if ($this->options->AvatarLight === 'on') : ?>
    <style>
        /*头像呼吸光环和鼠标悬停旋转放大*/
        .avatar {
            border-radius: 50%;
            animation: light 4s ease-in-out infinite;
            transition: 0.5s;
        }
        .avatar:hover {
            transform: scale(1.15) rotate(720deg);
        }
        @keyframes light {
            0%{box-shadow: 0 0 4px #f00;}
            25%{box-shadow: 0 0 16px #0f0;} 
            50%{box-shadow: 0 0 4px #00f;}
            75%{box-shadow: 0 0 16px #0f0;} 
            100%{box-shadow: 0 0 4px #f00;}
        }
    </style>
<?php endif; ?>
<?php if ($this->options->CommentGeetest != 'off') : ?>
    <script src="//static.geetest.com/static/tools/gt.js"></script>
<?php endif; ?>