<?php
    //首先你要有读写文件的权限，首次访问不显示，正常情况刷新即可
    $online_log = "slzxrs.dat"; //保存人数的文件到根目录,
    $timeout = 30;//30秒内没动作者,认为掉线
    @$entries = file($online_log);
    $temp = array();
    for ($i=0;$i<count($entries);$i++){
        $entry = explode(",",trim($entries[$i]));
        if(($entry[0] != getenv('REMOTE_ADDR')) && ($entry[1] > time())) {
            array_push($temp,$entry[0].",".$entry[1]."\n"); //取出其他浏览者的信息,并去掉超时者,保存进$temp
        }
    }
    array_push($temp,getenv('REMOTE_ADDR').",".(time() + ($timeout))."\n"); //更新浏览者的时间
    $slzxrs = count($temp); //计算在线人数
    $entries = implode("",$temp);
    //写入文件
    $fp = fopen($online_log,"w");
    flock($fp,LOCK_EX); //flock() 不能在NFS以及其他的一些网络文件系统中正常工作
    fputs($fp,$entries);
    flock($fp,LOCK_UN);
    fclose($fp);
    $tj= "在线人数：". $slzxrs . " 人";
?>
<?php 
    if(Helper::options()->CnzzType !== 'off') {
        $CnzzIdSave = Helper::options()->CnzzId;
        $CnzzTypeStyle = Helper::options()->CnzzType;
        $CnzzTypeStyle = str_replace("CnzzId", $CnzzIdSave, $CnzzTypeStyle);
    }
?>
<footer class="joe_footer">
    <div class="joe_container" style="min-height: 20px;margin-top: 20px;">
        <div class="item">
            <?php $this->options->JFooter_Left() ?>
        </div>
        <div class="item" style="margin: 10px; <?php if(Helper::options()->onlinePersion !== 'on') echo 'display:none;'  ?>">
            <?php echo $tj ?>
        </div>
        <?php if ($this->options->JBirthDay) : ?>
            <div class="item run">
                <span>已运行 <strong class="joe_run__day">00</strong> 天 <strong class="joe_run__hour">00</strong> 时 <strong class="joe_run__minute">00</strong> 分 <strong class="joe_run__second">00</strong> 秒</span>
            </div>
        <?php endif; ?>
        <div class="item">
            <?php $this->options->JFooter_Right() ?>
        </div>
    </div>
    <div class="joe_container" style="min-height: 20px;margin-bottom: 20px;">
        <div class="item" style="<?php if(Helper::options()->CnzzType == 'off') echo 'display:none;'  ?>">
            <span id='cnzz_stat_icon_<?php Helper::options()->CnzzType ?>'></span><script src='<?php echo $CnzzTypeStyle ?>' type='text/javascript'></script>
        </div>
        <div class="item" id="mli" style="<?php if(Helper::options()->BaiduDomain !== 'on') echo 'display:none;'  ?>">
        </div>
    </div>
</footer>

<div class="joe_action">
    <div class="joe_action_item scroll">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76zm-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z" />
        </svg>
    </div>
    <!--<div class="joe_action_item" id="openColorPick">
        <svg t="1625457632143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2553" width="25" height="25"><path d="M716.8 897.024c-73.728 0-133.12-59.392-133.12-133.12v-2.048c0-20.48 6.144-45.056 16.384-71.68 0 0 0-2.048 2.048-2.048 12.288-30.72 30.72-61.44 55.296-94.208 16.384-22.528 34.816-45.056 51.2-65.536 2.048-4.096 6.144-6.144 8.192-10.24 2.048 2.048 6.144 6.144 8.192 10.24 6.144 8.192 14.336 16.384 20.48 26.624 8.192 10.24 16.384 22.528 24.576 32.768 2.048 2.048 4.096 4.096 6.144 8.192 24.576 32.768 43.008 67.584 55.296 96.256 12.288 26.624 18.432 51.2 18.432 73.728 0 71.68-59.392 131.072-133.12 131.072z m-546.816-366.592l81.92-88.064h581.632l16.384 16.384-73.728 69.632c-6.144-8.192-12.288-16.384-20.48-24.576-6.144-8.192-12.288-14.336-18.432-20.48-4.096-4.096-6.144-6.144-6.144-8.192l-14.336-16.384-14.336 16.384c-2.048 2.048-4.096 4.096-6.144 8.192-6.144 6.144-12.288 12.288-18.432 20.48-18.432 22.528-36.864 45.056-53.248 69.632-24.576 36.864-45.056 71.68-59.392 104.448-10.24 24.576-16.384 47.104-18.432 67.584l-83.968 77.824-292.864-292.864z m364.544-389.12l260.096 260.096h-501.76l241.664-260.096z m276.48 430.08c-2.048-4.096-6.144-8.192-8.192-12.288l106.496-100.352-376.832-376.832-419.84 448.512 348.16 348.16 86.016-79.872c16.384 79.872 86.016 141.312 169.984 141.312 96.256 0 174.08-77.824 174.08-174.08 0-26.624-8.192-57.344-20.48-88.064-14.336-34.816-34.816-71.68-59.392-106.496z" p-id="2554"></path></svg>
    </div>-->
    <div class="joe_action_item mode">
        <svg class="icon-1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M587.264 104.96c33.28 57.856 52.224 124.928 52.224 196.608 0 218.112-176.128 394.752-393.728 394.752-29.696 0-58.368-3.584-86.528-9.728C223.744 832.512 369.152 934.4 538.624 934.4c229.376 0 414.72-186.368 414.72-416.256 1.024-212.992-159.744-389.12-366.08-413.184z" />
            <path d="M340.48 567.808l-23.552-70.144-70.144-23.552 70.144-23.552 23.552-70.144 23.552 70.144 70.144 23.552-70.144 23.552-23.552 70.144zM168.96 361.472l-30.208-91.136-91.648-30.208 91.136-30.208 30.72-91.648 30.208 91.136 91.136 30.208-91.136 30.208-30.208 91.648z" />
        </svg>
        <svg class="icon-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M234.24 512a277.76 277.76 0 1 0 555.52 0 277.76 277.76 0 1 0-555.52 0zM512 187.733a42.667 42.667 0 0 1-42.667-42.666v-102.4a42.667 42.667 0 0 1 85.334 0v102.826A42.667 42.667 0 0 1 512 187.733zm-258.987 107.52a42.667 42.667 0 0 1-29.866-12.373l-72.96-73.387a42.667 42.667 0 0 1 59.306-59.306l73.387 72.96a42.667 42.667 0 0 1 0 59.733 42.667 42.667 0 0 1-29.867 12.373zm-107.52 259.414H42.667a42.667 42.667 0 0 1 0-85.334h102.826a42.667 42.667 0 0 1 0 85.334zm34.134 331.946a42.667 42.667 0 0 1-29.44-72.106l72.96-73.387a42.667 42.667 0 0 1 59.733 59.733l-73.387 73.387a42.667 42.667 0 0 1-29.866 12.373zM512 1024a42.667 42.667 0 0 1-42.667-42.667V878.507a42.667 42.667 0 0 1 85.334 0v102.826A42.667 42.667 0 0 1 512 1024zm332.373-137.387a42.667 42.667 0 0 1-29.866-12.373l-73.387-73.387a42.667 42.667 0 0 1 0-59.733 42.667 42.667 0 0 1 59.733 0l72.96 73.387a42.667 42.667 0 0 1-29.44 72.106zm136.96-331.946H878.507a42.667 42.667 0 1 1 0-85.334h102.826a42.667 42.667 0 0 1 0 85.334zM770.987 295.253a42.667 42.667 0 0 1-29.867-12.373 42.667 42.667 0 0 1 0-59.733l73.387-72.96a42.667 42.667 0 1 1 59.306 59.306l-72.96 73.387a42.667 42.667 0 0 1-29.866 12.373z" />
        </svg>
    </div>
</div>
<?php 
    $FooterNavs = array();
    $FooterNavs_text = $this->options->FooterNavs;
    if ($FooterNavs_text) {
        $FooterNavs_arr = explode("\r\n", $FooterNavs_text);
        if (count($FooterNavs_arr) > 0) {
            for ($i = 0; $i < count($FooterNavs_arr); $i++) {
                $name = explode("||", $FooterNavs_arr[$i])[0];
                $url =  explode("||", $FooterNavs_arr[$i])[1];
                $img = explode("||", $FooterNavs_arr[$i])[2];
                if(empty($img)) {
                    $img = '<svg t="1633853826797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7556" width="30" height="30"><path d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z" p-id="7557"></path></svg>';
                }
                $FooterNavs[] = array("name" => trim($name), "url" => trim($url), "img" => trim($img));
            };
        }
    }
?>

<?php if (sizeof($FooterNavs) > 0) : ?>
    <div id="mobile-footer">
        <ul id="mobile-menu">
            <?php foreach ($FooterNavs as $item) : ?>
                <li> <a href="<?php echo $item['url']; ?>"><span><?php echo $item['img']; ?></span><?php echo $item['name']; ?> </a></li>
            <?php endforeach; ?>
        </ul>
    </div>
    
    <script>
        var navsNum = <?php echo sizeof($FooterNavs); ?> || 1;
        var widthSize = 100 / navsNum;
        $("#mobile-footer #mobile-menu li").width(widthSize + '%');
        if(!$("#mobile-footer").is(":hidden")) {
            $('footer').css('marginBottom', 40);
        }
    </script>
    
<?php endif; ?>
<script>
    <?php
    $cookie = Typecho_Cookie::getPrefix();
    $notice = $cookie . '__typecho_notice';
    $type = $cookie . '__typecho_notice_type';
    ?>
    <?php if (isset($_COOKIE[$notice]) && isset($_COOKIE[$type]) && ($_COOKIE[$type] == 'success' || $_COOKIE[$type] == 'notice' || $_COOKIE[$type] == 'error')) : ?>
        Qmsg.info("<?php echo preg_replace('#\[\"(.*?)\"\]#', '$1', $_COOKIE[$notice]); ?>！")
    <?php endif; ?>
    <?php
    Typecho_Cookie::delete('__typecho_notice');
    Typecho_Cookie::delete('__typecho_notice_type');
    ?>
    console.log("%c页面加载耗时：<?php _endCountTime(); ?> | Theme By Joe", "color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px");
    <?php $this->options->JCustomScript() ?>
</script>

<?php $this->options->JCustomBodyEnd() ?>

<?php $this->footer(); ?>
