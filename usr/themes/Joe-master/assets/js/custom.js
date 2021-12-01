document.addEventListener('DOMContentLoaded', () => {
    // 编辑器 start
    // 版权
    var copyright = '<div class="cm-tools-item" title="版权"><svg t="1622610141615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2895" width="20" height="20"><path d="M515.52 722.259c-109.945 0-199.476-89.467-199.476-199.476s89.467-199.475 199.476-199.475 199.475 89.466 199.475 199.475S625.465 722.26 515.52 722.26z m0-339.883c-77.435 0-140.407 62.972-140.407 140.471 0 77.435 62.972 140.408 140.407 140.408s140.407-62.973 140.407-140.408c0-77.499-62.972-140.47-140.407-140.47z m29.054 229.874h-18.687c-49.34 0-89.466-40.126-89.466-89.403 0-49.34 40.125-89.466 89.466-89.466h18.751c16.319 0 29.502 13.183 29.502 29.502s-13.183 29.502-29.502 29.502h-18.75c-16.768 0-30.399 13.631-30.399 30.462 0 16.767 13.631 30.398 30.398 30.398h18.751c16.319 0 29.502 13.184 29.502 29.503s-13.247 29.502-29.566 29.502z m-29.054 411.686c-4.16 0-8.32-0.896-12.223-2.688L302.22 929.606c-137.08-62.46-222.194-181.109-222.194-309.549v-434.66c0-8.832 3.968-17.152 10.751-22.783 6.784-5.632 15.743-7.872 24.383-6.208 26.11 5.12 52.924 7.68 79.739 7.68 88.634 0 175.093-28.67 237.297-78.587l64.764-52.03c10.815-8.703 26.174-8.703 36.926 0L598.65 85.5c62.204 49.98 148.662 78.587 237.297 78.587 26.814 0 53.628-2.56 79.739-7.68 8.64-1.728 17.599 0.576 24.382 6.208 6.784 5.631 10.752 13.951 10.752 22.782v434.661c0 128.44-85.115 247.089-222.195 309.549l-201.075 91.642c-3.712 1.792-7.871 2.688-12.031 2.688zM139.03 219.89v400.167c0 105.082 71.932 203.124 187.637 255.856l188.788 86.075 188.788-86.075C820.013 823.117 891.88 725.075 891.88 620.057V219.89a478.563 478.563 0 0 1-55.868 3.264c-103.29 0-200.692-32.51-274.287-91.642L515.52 94.33l-46.333 37.182c-73.532 59.068-170.934 91.642-274.223 91.642-18.751 0-37.438-1.088-55.933-3.264z" fill="" p-id="2896"></path></svg></div>';
    $(".cm-tools").append(copyright);
    // 订阅
    var dingyue = '<div class="cm-tools-item" title="订阅"><svg t="1622897957757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2542" width="20" height="20"><path d="M347.5 754.3c-42.6 0-77.1-34.5-77.1-77.1s34.5-77.1 77.1-77.1 77.1 34.5 77.1 77.1-34.5 77.1-77.1 77.1z m334 0h-51.4c0-198.6-161-359.6-359.6-359.6v-51.4c227-0.1 411 184 411 411z m205.5 0h-51.4c0-312.1-253-565.2-565.2-565.2v-51.4C611 137.7 887 413.8 887 754.3z" p-id="2543"></path></svg></div>';
    $(".cm-tools").append(dingyue);
    // 字体颜色
    var fond_color = '<div class="cm-tools-item" title="字体颜色"><svg t="1623636038753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="670" width="20" height="20"><path d="M792.864 922.112l103.584-2.176L572.576 110.24h-89.184L161.696 919.936H264l66.944-167.936h394.112l67.808 170.112zM369.216 656L528 257.632 686.784 656h-317.568z" p-id="671" fill="#bfbfbf"></path></svg></div>';
    $(".cm-tools").append(fond_color);
    
    // 插入编辑器图标
    // 本站主题
    var local_theme = '<div class="cm-tools-item" title="本站主题"><svg t="1624802099189" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="20" height="20"><path d="M512 185.6c129.792 0 238.0288 94.5152 256.64 218.5472l0.3072 2.176c95.232 23.3472 165.1456 107.008 168.1408 206.1824l0.1024 6.656c0 118.144-94.5664 214.8096-213.4016 219.0592a32 32 0 1 1-2.304-63.9488c84.608-3.0208 151.7056-71.6288 151.7056-155.136 0-76.3648-56.3968-140.928-131.7888-153.088l-5.9904-0.8704-27.008-3.328-1.0752-27.1872C703.3344 331.6224 617.216 249.6 512 249.6c-103.0144 0-187.7504 78.6944-194.9952 178.7392l-0.3328 6.272-1.0752 27.1872-26.9824 3.328c-78.4128 9.6768-137.8048 75.6224-137.8048 154.0096 0 83.7888 67.5328 152.5248 151.4496 155.264l265.2928-0.1024a32 32 0 1 1 0.0256 64l-266.3424 0.1024c-119.296-3.8656-214.4256-100.736-214.4256-219.264 0-99.7376 67.6864-184.96 161.4592-211.0464l6.784-1.792 0.3072-2.2016c18.3296-121.728 122.88-214.9888 249.4464-218.3936L512 185.6z" p-id="1977" fill="#efefef"></path><path d="M550.784 555.8528h61.3376a21.376 21.376 0 0 0 15.3344-36.2752l-91.8528-94.208a21.376 21.376 0 0 0-30.592 0l-91.8528 94.208a21.376 21.376 0 0 0 15.36 36.352h61.2608v82.9952a30.5152 30.5152 0 0 0 61.0048 0v-83.072z" p-id="1978" fill="#efefef"></path></svg></div>';
    $(".cm-tools").append(local_theme);
    
    // 图床
    var tuchuang = '<div class="cm-tools-item" title="图床"><svg t="1629983171686" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2165" width="24" height="24"><path d="M288 480c54.4 0 96-41.6 96-96s-41.6-96-96-96-96 41.6-96 96 41.6 96 96 96z m0-128c19.2 0 32 12.8 32 32s-12.8 32-32 32-32-12.8-32-32 12.8-32 32-32z" p-id="2166" fill="#bfbfbf"></path><path d="M864 160h-704c-54.4 0-96 41.6-96 96v512c0 54.4 41.6 96 96 96h704c54.4 0 96-41.6 96-96v-512c0-54.4-41.6-96-96-96z m-736 608v-512c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v364.8l-169.6-169.6c-38.4-38.4-99.2-38.4-134.4 0l-348.8 348.8h-83.2c-19.2 0-32-12.8-32-32z m736 32h-531.2l304-304c12.8-12.8 32-12.8 44.8 0l214.4 214.4v57.6c0 19.2-12.8 32-32 32z" p-id="2167" fill="#bfbfbf"></path></svg></div>';
    $(".cm-tools").append(tuchuang);
    
    
    var custom_button = '<div class="cm-modal__wrapper-footer--confirm custom_button">确定</div>';
    $(".cm-tools .cm-tools-item").click(function(){
        if($(this).attr("title") == '版权') {
            var copyright_txt = '插入版权';
            var copyright_body = '<div class="fitem"><label>版权名称</label><input autocomplete="off" name="copyright_title" placeholder="请输入版权名称"></div>';
            copyright_body += '<div class="fitem"><label>版权地址</label><input autocomplete="off" name="copyright_url" placeholder="请输入版权地址"></div>';
            $(".cm-modal__wrapper-header .cm-modal__wrapper-header--text").html(copyright_txt);
            $(".cm-modal__wrapper-bodyer").html(copyright_body);
            $('.cm-modal').addClass('active');
            $(".cm-modal__wrapper-footer--confirm").attr('style', 'display: none');
            $(".cm-modal__wrapper-footer").removeAttr('style');
            $('.custom_button').remove();
            $(".cm-modal__wrapper-footer").append(custom_button);
            $(".custom_button").click(function(){
                var copyright_title = $( ".fitem input[name='copyright_title']").val();
                var copyright_url = $( ".fitem input[name='copyright_url']").val();
                var text= "<span><</span>div id='custom-copyright' data-title='" + copyright_title + "' data-href='" + copyright_url + "'><span><</span>/div>";
                $(".cm-mainer .cm-scroller .cm-content").append('<br>!!!<br>');
                $(".cm-mainer .cm-scroller .cm-content").append(text);
                $(".cm-mainer .cm-scroller .cm-content").append('<br>!!!<br>');
                $('.cm-modal').removeClass('active');
            });
        }
        else if($(this).attr("title") == '订阅') {
            var dingyue_txt = '插入订阅链接';
            var dingyue_body = '<div class="fitem"><label>订阅地址</label><input autocomplete="off" name="rss_url" placeholder="请输入订阅地址"></div>';
            $(".cm-modal__wrapper-header .cm-modal__wrapper-header--text").html(dingyue_txt);
            $(".cm-modal__wrapper-bodyer").html(dingyue_body);
            $('.cm-modal').addClass('active');
            $(".cm-modal__wrapper-footer--confirm").attr('style', 'display: none');
            $(".cm-modal__wrapper-footer").removeAttr('style');
            
            $('.custom_button').remove();
            $(".cm-modal__wrapper-footer").append(custom_button);
            $(".custom_button").click(function(){
                var dingyue_url = $( ".fitem input[name='rss_url']").val();
                var text= '<span><</span>iframe width="500" height="250" src="' + dingyue_url + '" scrolling="no"><span><</span>/iframe>';
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>!!!<br>');
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append(text);
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>!!!<br>');
                $('.cm-modal').removeClass('active');
            });
        }
        else if($(this).attr("title") == '字体颜色') {
            var fontColor_txt = '请选择字体颜色';
            var fontColor_body = '<div class="fitem"><label>字体颜色</label><input style="width: 44px;padding: 0 2px;flex: none" autocomplete="off" value="#ff6c6c" name="font_color" type="color"/></div>'
            $(".cm-modal__wrapper-header .cm-modal__wrapper-header--text").html(fontColor_txt);
            $(".cm-modal__wrapper-bodyer").html(fontColor_body);
            $('.cm-modal').addClass('active');
            $(".cm-modal__wrapper-footer--confirm").attr('style', 'display: none');
            $(".cm-modal__wrapper-footer").removeAttr('style');
            
            $('.custom_button').remove();
            $(".cm-modal__wrapper-footer").append(custom_button);
            $(".custom_button").click(function(){
                var font_color = $( ".fitem input[name='font_color']").val();
                var text= '<span><</span>div style="color:'+ font_color +';">// 文字内容<span><</span>/div>';
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>!!!<br>');
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append(text);
                $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>!!!<br>');
                $('.cm-modal').removeClass('active');
            });
        }
        // 判断点击的是什么按钮
        else if($(this).attr("title") == '本站主题') {
            // 该行在编辑器内插入内容
            $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>全量文件下载地址：<br>{hide}<br>{cloud title="本站同款Joe主题全量文件" type="bd" url="https://pan.baidu.com/s/1-HOmRnGf26rf4Akfn8CHfQ" password="aqf8"/}<br>{/hide}<br>');
            $('.cm-modal').removeClass('active');
        }
        // 判断点击的是什么按钮
        else if($(this).attr("title") == '付费阅读') {
            // 该行在编辑器内插入内容
            $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br><span><</span>!--TePass start--><br>// 付费区域<br><span><</span>!--TePass end--><br>');
            $('.cm-modal').removeClass('active');
        }
        // 判断点击的是什么按钮
        else if($(this).attr("title") == '涨粉') {
            // 该行在编辑器内插入内容
            $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br><span><</span>!--wechatfans start--><br>内容<br><span><</span>!--wechatfans end-->');
            $('.cm-modal').removeClass('active');
        }
        else if($(this).attr("title") == '图床') {
            var tuchuang_txt = '请选择图片(填写token后使用)';
            var tuchuang_body = '<div class="fitem"><input type="file" autocomplete="off" name="tuchuang" id="bianjiqi_tuchuang" hidden><span id="bianjiqi_tuchuang_imgUpload_btn_upload"><svg t="1629804953737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" width="24" height="24"><path d="M740.693333 750.933333h-102.4c-20.48 0-34.133333-13.653333-34.133333-34.133333s13.653333-34.133333 34.133333-34.133333h102.4c58.026667 0 102.4-44.373333 102.4-102.4 0-47.786667-34.133333-88.746667-78.506666-98.986667-17.066667-3.413333-27.306667-20.48-27.306667-37.546667 3.413333-13.653333 3.413333-23.893333 3.413333-34.133333 0-112.64-92.16-204.8-204.8-204.8-88.746667 0-170.666667 61.44-197.973333 146.773333 0 13.653333-13.653333 23.893333-27.306667 23.893334-81.92 3.413333-146.773333 71.68-146.773333 153.6 0 85.333333 68.266667 153.6 153.6 153.6h51.2c20.48 0 34.133333 13.653333 34.133333 34.133333s-13.653333 34.133333-34.133333 34.133333H314.026667c-122.88 0-221.866667-98.986667-221.866667-221.866666 0-112.64 81.92-204.8 191.146667-218.453334 40.96-102.4 143.36-174.08 252.586666-174.08 150.186667 0 273.066667 122.88 273.066667 273.066667v13.653333c61.44 27.306667 102.4 88.746667 102.4 157.013334 0 95.573333-75.093333 170.666667-170.666667 170.666666z m-204.8 102.4V477.866667c0-13.653333-6.826667-23.893333-20.48-30.72-10.24-6.826667-23.893333-3.413333-34.133333 3.413333l-136.533333 102.4c-13.653333 10.24-17.066667 34.133333-6.826667 47.786667 10.24 13.653333 34.133333 17.066667 47.786667 6.826666l81.92-61.44v307.2c0 20.48 13.653333 34.133333 34.133333 34.133334s34.133333-13.653333 34.133333-34.133334z m129.706667-252.586666c10.24-13.653333 6.826667-37.546667-6.826667-47.786667l-34.133333-27.306667c-13.653333-10.24-37.546667-6.826667-47.786667 6.826667-10.24 13.653333-6.826667 37.546667 6.826667 47.786667l34.133333 27.306666c6.826667 3.413333 13.653333 6.826667 20.48 6.826667 10.24 0 20.48-3.413333 27.306667-13.653333z" fill="#3E2AD1" p-id="2083"></path></svg></span><div height="260"><img style="width: 100%" id="bianjiqi_tuchuang_imgUpload_img" src=""></div></div>';
            $(".cm-modal__wrapper-header .cm-modal__wrapper-header--text").html(tuchuang_txt);
            $(".cm-modal__wrapper-bodyer").html(tuchuang_body);
            $('.cm-modal').addClass('active');
            $(".cm-modal__wrapper-footer--confirm").attr('style', 'display: none');
            $(".cm-modal__wrapper-footer").removeAttr('style');
            
            $('.custom_button').remove();
            $(".cm-modal__wrapper-footer").append(custom_button);
            $('#bianjiqi_tuchuang_imgUpload_btn_upload').click(function() {
                 $('#bianjiqi_tuchuang').click();
            });
            
            
            $("#bianjiqi_tuchuang").change(function() {
                var gs = this.files[0].name.split(".").pop().toLowerCase();
                //预览图片编码并显示
                var reader = new FileReader();
                reader.onloadend = function(e) {
                    $("#bianjiqi_tuchuang_imgUpload_img").attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            });
            
            $(".custom_button").click(function(){
                var formData = new FormData();
                formData.append("fileupload",$('#bianjiqi_tuchuang')[0].files[0]);
                $.ajax({
                    url: 'https://img.zhinianblog.com/api/upload/' + window.JoeConfig.ZHINIAN_TUCHUANG_TOKEN,
                    dataType: 'json',
                    type: 'POST',
                    async: false,
                    data: formData,
                    processData : false, // 使数据不做处理
                    contentType : false, // 不要设置Content-Type请求头
                    success: function(data){
                        if (data.success) {
                            var tuchuang_img_url = "![" + data.url + "](" + data.url + ")";
                            $(".cm-mainer .cm-scroller .cm-content .cm-activeLine").append('<br>' + tuchuang_img_url);
                        }
                    },
                    error:function(response){
                        console.log(response);
                    }
                });
                $('.cm-modal').removeClass('active');
            });
        }
        else {
            $(".cm-modal__wrapper-footer--confirm").removeAttr('style');
            $('.custom_button').remove();
        }
    });
    // 编辑器 end
    
    
    // 主题菜单 start
    // 订阅设置 start
    var dingyue_button = '<li class="item custom_config custom_config_dingyue" data-current="joe_dingyue">订阅设置</li>';
    $(".joe_config .joe_config__aside .tabs").append(dingyue_button);
    
    // 采集设置 start
    var caiji_button = '<li class="item custom_config custom_config_caiji" data-current="joe_caiji">采集设置</li>';
    $(".joe_config .joe_config__aside .tabs").append(caiji_button);
    
    // 友链设置 start
    var link_button = '<li class="item custom_config custom_config_link" data-current="joe_link">友链设置</li>';
    $(".joe_config .joe_config__aside .tabs").append(link_button);
    
    // 主题更新 start
    var themeUpdate_button = '<li class="item custom_config custom_config_themeUpdate" data-current="joe_themeUpdate">主题更新</li>';
    $(".joe_config .joe_config__aside .tabs").append(themeUpdate_button);
    
    $(".joe_config .joe_config__aside .item").click(function(){
        if($(this).attr("data-current") == 'joe_dingyue') {
            $(this).addClass('active');
            $(".joe_config .joe_config__dingyue").attr('style', 'display: block;');
            $(".joe_config .joe_config__notice").attr('style', 'display: none');
            $(".joe_config .joe_config__caiji").attr('style', 'display: none;');
            $(".joe_config .joe_config__link").attr('style', 'display: none;');
            $(".joe_config form:not(.backup)").attr('style', 'display: none');
            $(".joe_config .joe_config__themeUpdate").attr('style', 'display: none;');
            $(".joe_config .joe_config__aside .tabs li:not(.custom_config_dingyue)").removeClass('active');
        }
        else if($(this).attr("data-current") == 'joe_caiji') {
            $(this).addClass('active');
            $(".joe_config .joe_config__caiji").attr('style', 'display: block;');
            $(".joe_config .joe_config__notice").attr('style', 'display: none');
            $(".joe_config .joe_config__dingyue").attr('style', 'display: none;');
            $(".joe_config .joe_config__link").attr('style', 'display: none;');
            $(".joe_config form:not(.backup)").attr('style', 'display: none');
            $(".joe_config .joe_config__themeUpdate").attr('style', 'display: none;');
            $(".joe_config .joe_config__aside .tabs li:not(.custom_config_caiji)").removeClass('active');
        }
        else if($(this).attr("data-current") == 'joe_link') {
            $(this).addClass('active');
            $(".joe_config .joe_config__caiji").attr('style', 'display: none;');
            $(".joe_config .joe_config__notice").attr('style', 'display: none');
            $(".joe_config .joe_config__dingyue").attr('style', 'display: none;');
            $(".joe_config .joe_config__link").attr('style', 'display: block;');
            $(".joe_config form:not(.backup)").attr('style', 'display: none');
            $(".joe_config .joe_config__themeUpdate").attr('style', 'display: none;');
            $(".joe_config .joe_config__aside .tabs li:not(.custom_config_link)").removeClass('active');
        }
        else if($(this).attr("data-current") == 'joe_themeUpdate') {
            $(this).addClass('active');
            $(".joe_config .joe_config__caiji").attr('style', 'display: none;');
            $(".joe_config .joe_config__notice").attr('style', 'display: none');
            $(".joe_config .joe_config__dingyue").attr('style', 'display: none;');
            $(".joe_config .joe_config__link").attr('style', 'display: none;');
            $(".joe_config form:not(.backup)").attr('style', 'display: none');
            $(".joe_config .joe_config__themeUpdate").attr('style', 'display: block;');
            $(".joe_config .joe_config__aside .tabs li:not(.custom_config_themeUpdate)").removeClass('active');
        }
        else {
            $(".joe_config .joe_config__dingyue").attr('style', 'display: none;');
            $(".joe_config .joe_config__caiji").attr('style', 'display: none;');
            $(".joe_config .joe_config__link").attr('style', 'display: none;');
            $(".joe_config .joe_config__themeUpdate").attr('style', 'display: none;');
            $(".joe_config .custom_config").removeClass('active');
        }
    });
    
    
    // 复制弹出提示
    document.body.oncopy = function() {
        if(copyRightText) {
            Qmsg.warning(copyRightText);
        }
    };
    
    // 百度收录查询
    var baiduDomain = document.domain;
    var url = 'https://api.uomg.com/api/entry.baidu?domain=' + baiduDomain;
    $.getJSON(url,function(data) {
        $('#mli').append('<i class="iconfont icon-baidu">百度共收录 <strong class="">' +  data.data + '</strong></i> 条');
    });
    
    // 评论图片功能
    $(".imgUpload #imgUpload_btn_upload").click(function() {
        $(".imgUpload #imgUpload_btn_file").click();
    });
    
    $(".imgUpload #imgUpload_btn_clear").click(function() {
        $(".imgUpload #imgUpload_img").attr('src', '');
        $(".imgUpload #imgUpload_img").hide();
        $('.joe_comment__respond-form .body .text').show();
        $(".imgUpload #imgUpload_btn_file").val('');
        $(".joe_comment__respond-form .body textarea[name='text']").val('');
    });
    
    $(".imgUpload #imgUpload_btn_file").change(function() {
        var gs = this.files[0].name.split(".").pop().toLowerCase();
        if (gs!="jpg" && gs!="png" && gs!="gif" && gs!= 'jpeg') {
            alert("请上传.jpg，.png，.gif，.jpeg格式文件"); 
            return false;
        }
        //预览图片编码并显示
        var reader = new FileReader();
        reader.onloadend = function(e) {
            dealImage(e.target.result, 200, function(compressImg) {
                $(".imgUpload #imgUpload_img").attr('src', compressImg);
                $(".joe_comment__respond-form .body textarea[name='text']").val('{!{' + compressImg + '}!} ');
                $(".imgUpload #imgUpload_img").show();
                $('.joe_comment__respond-form .body .text').hide();
            });
        }
        reader.readAsDataURL(this.files[0]);
    });
    
    
    /**
     * 压缩图片 
     */
    function dealImage(base64, w, callback) {
        var newImage = new Image()
        //压缩系数0-1之间
        var quality = 0.6;
        newImage.src = base64;
        newImage.setAttribute('crossOrigin', 'Anonymous');    //url为外域时需要
        var imgWidth, imgHeight;
        var ba = null;
        newImage.onload = function () {
            imgWidth = this.width;
            imgHeight = this.height;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (Math.max(imgWidth, imgHeight) > w) {
                if (imgWidth > imgHeight) {
                    canvas.width = w;
                    canvas.height = w * imgHeight / imgWidth;
                } else {
                    canvas.height = w;
                    canvas.width = w * imgWidth / imgHeight;
                }
            } else {
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                quality = 0.6;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
            while (base64.length / 1024 > 30) {
                quality -= 0.01;
                base64 = canvas.toDataURL("image/jpeg", quality);
            }
            // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
            while (base64.length / 1024 < 20) {
                quality += 0.001;
                base64 = canvas.toDataURL("image/jpeg", quality);
            }
            var ba = canvas.toDataURL('image/jpeg', quality); //压缩语句
            callback(ba);
        }
    }
    
    // 获取版本号
    $.ajax({
        url: 'https://dy.zhinianblog.com/api/blogversion',
        type: 'POST',
        success: function(data) {
            if(data) {
                var oldVersion = $('#zhinianblog_version').html();
                var html = '<a target="_BLANK" href="https://zhinianblog.com/archives/993/">' + oldVersion + ' ~ ' + data + '</a>';
                $('#zhinianblog_version').html(html);
            }
        },
        error:function(response){
        }
    });
    
    
    let autoUpdateTheme_submit = document.getElementById('AutoUpdateTheme_submit');
    if(autoUpdateTheme_submit) {
        autoUpdateTheme_submit.onclick = function(e) {
            //创建异步对象  
            var xhr = new XMLHttpRequest();
            //设置请求的类型及url
            var cardId = document.getElementById('AutoUpdateTheme_cardId').value;
            var themeName = document.getElementById('AutoUpdateTheme_themeName').value;
            var downLoadUrl = document.getElementById('AutoUpdateTheme_downLoadUrl').value;
            var siteUrl = window.location.protocol + '//' + window.location.host;
            //post请求一定要添加请求头才行不然会报错
            xhr.open('get', 'https://dy.zhinianblog.com/api/updateTheme?siteUrl='+siteUrl+'&cardId='+cardId+'&themeName='+themeName+'&downLoadUrl='+downLoadUrl);
            // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
            //发送请求
            
            xhr.send();
            xhr.onreadystatechange = function () {
                // 这步为判断服务器是否正确响应
                if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText) {
                    var resultMsg = '';
                    if(xhr.responseText == 'error0') {
                        resultMsg = '授权码不存在，请到 https://dy.zhinianblog.com 申请';
                    }
                    else if(xhr.responseText == 'error1') {
                        resultMsg = '主题目录不包含Joe，请重新填写';
                    }
                    else if(xhr.responseText == 'error2') {
                        resultMsg = '下载远程主题包失败，请重试';
                    }
                    else if(xhr.responseText == 'success0') {
                        resultMsg = '更新成功';
                    }
                    else if(xhr.responseText == 'shell_exec') {
                        resultMsg = 'shell_exec函数未启用，请先启用shell_exec函数';
                    }
                    else if(xhr.responseText == 'error11') {
                        resultMsg = '请求插件地址失败，请确认插件是否启用';
                    }
                    else {
                        resultMsg = '未知异常，请联系管理员';
                    }
                    alert(resultMsg);
                }
            };
        }
    }
    
});
