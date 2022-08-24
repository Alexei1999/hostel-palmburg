var timer_jq_loaded_for_bnovo_widget = timer_jq_loaded_for_bnovo_widget || undefined;
;(function (window) {
    var init_callbacks = init_callbacks || new Array();
    var timer_all_files_loaded;
    var base = is_secure() ? 'https://widget.reservationsteps.ru' : 'http://widget.reservationsteps.ru';
    if (window.is_local == 1) {
        base = '';
    }

    function is_secure() {
        return (location && location.protocol === 'https:');
    }

    function init(callback) {
        init_callbacks.push(callback);

        include_necessary_files();

        if (timer_all_files_loaded === undefined) {
            timer_all_files_loaded = window.setInterval(execute_callbacks_when_all_loaded, 10);
        }
    }

    function include_necessary_files() {
        if (window.jQuery === undefined && timer_jq_loaded_for_bnovo_widget === undefined) {
            include_latest();
            timer_jq_loaded_for_bnovo_widget = window.setInterval(include_base64_when_jq_loaded, 10);
        } else if (window.jQuery !== undefined && window.jQuery.base64 === undefined) {
            include_base64();
        }
    }

    function execute_callbacks_when_all_loaded() {
        if (window && window.jQuery !== undefined && window.jQuery.base64 !== undefined) {
            window.clearInterval(timer_all_files_loaded);
            execute_callbacks();
        }
    }

    function execute_callbacks() {
        for (var i = 0; i < init_callbacks.length; ++i) {
            attempt(init_callbacks[i]);
        }
        init_callbacks = new Array();
    }


    function include_base64_when_jq_loaded() {
        if (window && window.jQuery !== undefined) {
            window.clearInterval(timer_jq_loaded_for_bnovo_widget);

            if (window.jQuery.base64 === undefined) {
                include_base64();
            }
        }
    }

    function include_latest() {
        js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', base + '/js/jquery.js');
        document.getElementsByTagName('HEAD')[0].appendChild(js);
        return;
    }

    function include_base64() {
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', base + '/js/base64.js');
        document.getElementsByTagName('HEAD')[0].appendChild(js);
        return;
    }

    function hex_to_rgba(h, a) {
        var s = (h.charAt(0) == "#") ? h.substring(1, 7) : h,
            str = "rgba(" + parseInt(s.substring(0, 2), 16) + ", " + parseInt(s.substring(2, 4), 16) + ", " + parseInt(s.substring(4, 6), 16) + ", " + a + ")";
        return str;
    }

    function gogo(id, params) {
        var el = window.document.getElementById(id),
            li,
            styles;
        if (el == null) return false;

        var c = window.document;

        li = c.createElement("style");
        if (li) {
            if (params._logo_background == "none") {
                li = c.createElement("style");
                if (li) {
                    styles = "#" + id + " a { display: none; } ";
                }
            } else {
                //styles = "#"+id+" a, #"+id+" a:hover {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 100%;\r\nwidth: 4.2em;\r\nheight: 1.5em;\r\nline-height: 1.5em;\r\n";
                //styles += "margin: 0 0 0 1.5em;\r\nfont-size: 10px;\r\nfont-family: Arial;\r\nfont-weight: normal;\r\ntext-align: center;\r\ntext-decoration: none;\r\n";
                styles = "#" + id + " a, #" + id + " a:hover {\r\nposition: absolute; right: 4px;  font-size: 9px;  line-height: 1em;  opacity: 0.5;  z-index: 3;\r\n";


                if (params._logo_textcolor) {
                    styles += "color: " + hex_to_rgba(params._logo_textcolor, '0.5') + "!important;\r\n";
                } else {
                    styles += "color: " + hex_to_rgba(params.btn_textcolor, '0.5') + "!important;\r\n";
                }
                if (params._logo_background) {
                    styles += "background: " + hex_to_rgba(params._logo_background, '0.4') + "!important;\r\n";
                } else {
                    styles += "background: " + hex_to_rgba(params.btn_background, '0.4') + "!important;\r\n";
                }
                //styles += "border: none; -webkit-transform: rotate(90deg);\r\n-ms-transform: rotate(90deg);\r\ntransform: rotate(90deg);\r\n";
                //styles += "-webkit-transform-origin: 0% 0%;\r\n-ms-transform-origin: 0% 0%;\r\ntransform-origin: 0% 0%;\r\nz-index: 1101;}\r\n#"+id+" a:hover {\r\n";
                if (params._logo_textcolor) {
                    styles += "color: " + hex_to_rgba(params._logo_textcolor, '1') + "!important;\r\n";
                } else {
                    styles += "color: " + hex_to_rgba(params.btn_textcolor, '1') + "!important;\r\n";
                }
                if (params._logo_background) {
                    styles += "background: " + hex_to_rgba(params._logo_background, '0.8') + "!important;\r\n}";
                } else {
                    styles += "background: " + hex_to_rgba(params.btn_background, '0.8') + "!important;\r\n}";
                }
            }

            jQuery(li).prepend(styles);
            document.getElementsByTagName('head')[0].appendChild(li);
        }

        var df = c.createElement("div"),
            g = {style: "clear:both; overflow: visible; position: relative; z-index: 1011"},
            h,
            wid = parseInt(params.width),
            widwid = (params.width.substr(params.width.length - 1) == "%") ? (wid + "%") : (wid + "px");
        widfr = (params.width.substr(params.width.length - 1) == "%") ? ("100%") : (wid);

        for (h in g) {
            df.setAttribute(h, g[h]);
        }
        el.setAttribute("style", "width: " + widwid + "; margin: 0 auto; position: relative;");
        jQuery(el).prepend(df);

        var f = c.createElement("iframe");
        g = {
            id: "_bn_iframe_" + id,
            name: "_bn_iframe_" + id,
            style: "z-index: 101; margin: 0;",
            frameborder: "0",
            border: "0",
            allowtransparency: "yes",
            height: "0",
            scrolling: "no",
            width: widfr
        };

        for (h in g) {
            f.setAttribute(h, g[h]);
            //jQuery.f.css(h, g[h]);
        }

        df.appendChild(f);

        var src = base + "/widget/?" + jQuery.param(params);
        if (is_secure()) src += '&_ssl=1';
        jQuery.ajaxSetup({
            cache: true
        });

        jQuery.getScript(src, function () {
            var fc = decode_utf8(jQuery.base64.decode(_bnovo_widget));
            var i = fc.document;
            f.contentDocument ? i = f.contentDocument : f.contentWindow && (i = f.contentWindow.document);
            i.open();
            i.write(fc);
            i.close();
        });
    }

    function decode_utf8(s) {
        return decodeURIComponent(escape(s));
    }

    function attempt(fn) {
        try {
            return fn();
        } catch (e) {
            if (window.console && window.console.log && window.console.log.apply) {
                window.console.log("Bnovo_Widget Error: ", e);
            }
        }
    }

    var Bnovo_Widget = {
        init: function (callback) {
            attempt(function () {
                return init(callback);
            });
        },
        open: function (id, params) {
            attempt(function () {
                return gogo(id, params);
            });
        }
    }

    window.Bnovo_Widget = Bnovo_Widget;

}(this.window || this));

window.topForLink = function (top) {
    var bnovo_link = document.getElementById('_bnovo_link_');
    if (bnovo_link) {
        bnovo_link.style.top = (top + 3) + 'px';
    }
}
