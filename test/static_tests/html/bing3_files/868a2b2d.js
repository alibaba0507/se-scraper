(function(n){function w(){if(t=Bing.MapControl[i],t){h=sb_st(function(){a("Warning","Text","timeout")},1e4);var n=_ge(i+"_s");n&&sj_be(n,"load",function(){Log.Log("Latency","DynMap",i+"_s",!1,"Time",sb_gt()-s)});t.ensureDynamic(function(){c(t)})}}function b(t){var o=t.pin.getId(),i=u[o],s=[],h,c;e&&(h=_ge("pp_dl"+o),h&&s.push({label:n.dirLabel,eventHandler:function(){r(h)}}),c=_ge("pp_dpl"+o),c&&s.push({label:n.detLabel,eventHandler:function(){r(c)}}));t.handled=!0;t.infoboxOptions=e?{title:i.n,description:i.d,actions:s}:{title:i.n};i.i>-1&&(sj_evt.fire("MapPinHov",i.i,1),f!=null&&sj_evt.fire("PinHov",f.i,0),f=i)}function k(n){var t=u[n.pin.getId()].i;t>0&&(sj_evt.fire("MapPinHov",t,0),f=null,typeof LocalDominantEntity!="undefined"&&LocalDominantEntity&&LocalDominantEntity.SelectedState&&LocalDominantEntity.Index!==t&&sj_evt.fire("PinHov",LocalDominantEntity.Index,!0))}function d(n){var t=_d.getElementsByClassName("MiniInfobox2");t&&t.length!==0||(t=_d.getElementsByClassName("dm_MiniInfobox3"));t&&t.length===1&&(t[0].style.display="none",clearInterval(n))}function c(r){var u,w,c,nt,rt;if(t=r,sj_evt.bind("PinHov",g,0),u=Microsoft.Maps.Events,e){w=0;v&&(w=y);var tt="",it="#sidebar",f=_ge("content");f||(it="#b_context",tt=".b_footer",f=_ge("b_content"));f&&(f.style.minWidth=f.offsetWidth+"px");r.dockRight(p,{topAlign:it,animate:!1,marginRight:w,footer:tt});c=_ge(i);c&&(c.className=c.className+" wpc_dockedMap",c.style.zIndex="0")}else r.Map.setOptions({disablePanning:o,disableZooming:o}),u.addHandler(r.Map,"click",l),u.addHandler(r,"pinclick",l);nt=n.mpQuery;nt&&r.loadObject&&r.loadObject("MicroPOIManager",function(n){n.show(nt)});r.Map.setOptions({disableKeyboardInput:!0});n.hasdom||(u.addHandler(r,"pinhover",b),u.addHandler(r,"pinhoverend",k));typeof LocalDominantEntity!="undefined"&&LocalDominantEntity&&LocalDominantEntity.SelectedState&&_d.getElementsByClassName&&(rt=sb_si(function(){d(rt)},50));_d.activeElement&&_d.activeElement.blur();sb_ct(h);a("Latency","Time",sb_gt()-s);sj_evt.fire("MapAggregation.OnDynamicReady",t)}function l(n){var t,i;return n&&(t=_ge("dynmap"),n.targetType=="pushpin"?(i=_ge("pp_dpl"+n.target.getId()),i?r(i):t&&r(t)):n.targetType=="map"&&t&&r(t),n.handled=!0),!1}function r(n){if(typeof si_ct=="function")si_ct(n);else if(n.dispatchEvent){var t=_d.createEvent("MouseEvents");t.initMouseEvent("mousedown",!0,!0,_w,0,0,0,0,0,!1,!1,!1,!1,0,null);n.dispatchEvent(t)}else n.fireEvent&&n.fireEvent("onmousedown");_w.location=n.href}function g(n){for(var i=0;i<u.length;i++)if(u[i].i==n[1]&&t.pushpins&&t.pushpins[i]){t.pushpins[i].setHover(n[2]);break}}function a(n,t,r){Log.Log(n,"DynMap",i,!1,t,r)}var e=n.docked,v=n.socialPane,u=n.pins,o=n.disablePanAndZoom===undefined?!0:n.disablePanAndZoom,t,i,y=50,p=-690,s=sb_gt(),h,f;i=pushPinData.mapControlId;pushPinData.ensureDynamic===undefined||pushPinData.ensureDynamic?sj_evt.bind("mapCtrlOnLoad",w,1):sj_evt.bind("dynMapLoaded",function(){if(typeof Bing!="undefined"&&typeof Bing.MapControl!="undefined"){var n=Bing.MapControl[i];n&&c(n)}},1)})(pushPinData)