// Generated by CoffeeScript 1.10.0
$(document).ready(function() {
  var $fond, $main, $navigation, $window, History, activate_navigation, deploy_two, desactivate_navigation, root, success, undeploy_two, writeText;
  $navigation = $('#navigation');
  $main = $('main');
  $fond = $('#fond');
  $window = $(window);
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.navigation_top = $('#nav-activites').css('top');
  root.main_top = $main.css('top');
  $(window).resize(function() {
    $main.attr('style', "");
    $navigation.attr('style', "");
    root.navigation_top = $('#nav-activites').css('top');
    root.main_top = $main.css('top');
  });
  deploy_two = function() {
    var tl;
    tl = new TimelineMax({
      tweens: [
        TweenMax.to($navigation, 1, {
          top: (-parseInt(root.navigation_top)) + "px",
          ease: Power4.easeOut
        }), TweenMax.to($main, 1, {
          top: (parseInt(root.main_top) - parseInt(root.navigation_top) * 0.7) + "px",
          opacity: 0.15,
          ease: Power4.easeOut
        })
      ]
    });
  };
  undeploy_two = function() {
    var tl;
    tl = new TimelineMax({
      tweens: [
        TweenMax.to($navigation, 1, {
          top: "0px",
          ease: Power4.easeOut
        }), TweenMax.to($main, 1, {
          top: root.main_top,
          opacity: 1,
          ease: Power4.easeOut
        })
      ]
    });
  };
  activate_navigation = function() {
    $('#activites a').mouseenter(deploy_two);
    return $navigation.mouseleave(undeploy_two);
  };
  desactivate_navigation = function() {
    $('#activites a').off('mouseenter');
    return $navigation.off('mouseleave');
  };
  activate_navigation();
  $window.scroll(function() {
    return TweenMax.set($fond, {
      backgroundPosition: "0px " + (-$window.scrollTop() * 0.2) + "px"
    });
  });
  History = window.History;
  if (!History.enabled) {
    return false;
  }
  History.Adapter.bind(window, 'statechange', function() {
    var State, cible;
    State = History.getState();
    cible = State.data.target;
    return $.ajax({
      url: "html/" + cible,
      success: success
    });
  });
  $('#navigation').on('click', 'a', function(event) {
    var lien;
    event.preventDefault();
    desactivate_navigation();
    lien = $(this).attr('href');
    if (lien !== '#') {
      History.pushState({
        target: lien
      }, $(this).attr('data-titre'), lien);
    }
  });
  success = function(data, status, xml) {
    var timeline;
    timeline = new TimelineMax();
    timeline.to($main, 0.4, {
      opacity: 0,
      onComplete: writeText,
      onCompleteParams: [data]
    });
  };
  return writeText = function(data) {
    var contenu, tm;
    tm = new TimelineMax();
    tm.set($main, {
      text: data
    });
    contenu = $('#principal').html();
    tm.set($('#principal'), {
      opacity: 0
    });
    tm.call(undeploy_two);
    tm.from($('main h1.titre'), 0.6, {
      scale: 0,
      ease: Elastic.easeOut
    });
    tm.to($('#principal'), 1, {
      opacity: 1
    });
    activate_navigation();
  };
});
