// Generated by CoffeeScript 1.10.0
$(document).ready(function() {
  var $fond, $main, $navigation, $window, History, deploy_two, root, success, undeploy_two, updateData;
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
  $('#activites a').mouseenter(deploy_two);
  $navigation.mouseleave(undeploy_two);
  $window.scroll(function() {
    return TweenMax.set($fond, {
      backgroundPosition: "0px " + (-$window.scrollTop() * 0.4) + "px"
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
    lien = $(this).attr('href');
    if (lien !== '#') {
      return History.pushState({
        target: lien
      }, $(this).attr('data-titre'), lien);
    }
  });
  success = function(data, status, xml) {
    var timeline;
    timeline = new TimelineMax();
    timeline.to($main, 0.4, {
      opacity: 0,
      onComplete: updateData,
      onCompleteParams: [data]
    });
    timeline.call(undeploy_two);
    timeline.to($main, 0.4, {
      opacity: 1
    });
  };
  return updateData = function(data) {
    $(window).scrollTop(0);
    $main.html(data);
  };
});
