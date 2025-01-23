import { useEffect, useState } from "react";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    let clock = setInterval(() => {
      setCounterVisible((v) => !v);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, []);

  useEffect(() => {
    let clock = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      {counterVisible && <Counter count={count} />}
    </div>
  );
}

export default App;
<div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"><div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; will-change: transform; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"><span id="FAECC7F0-66BF-4CE3-9DCD-C3F3BDEF23D9" style="display: none;">To navigate, press the arrow keys.</span><div title="" aria-label="J&amp;amp;M Rentals Ltd." role="button" tabindex="0" style="width: 27px; height: 43px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 73px; top: -211px; z-index: -177;" aria-describedby="FAECC7F0-66BF-4CE3-9DCD-C3F3BDEF23D9"><img alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" style="width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"><div style="cursor: default; position: absolute; top: 0px; left: 0px; z-index: -312;"><div class="gm-style-iw-a" style="position: absolute; left: 85px; top: -177px;"><div class="gm-style-iw-t" style="right: -2px; bottom: 45px;"><div role="dialog" tabindex="-1" class="gm-style-iw gm-style-iw-c" aria-labelledby="4B077148-F6FE-478F-9F7E-0937DBC5EE4C" style="padding-inline-end: 0px; padding-bottom: 0px; padding-top: 0px; max-width: 328px; max-height: 223px; min-width: 0px;"><div class="gm-style-iw-chr"><div class="gm-style-iw-ch" id="4B077148-F6FE-478F-9F7E-0937DBC5EE4C"></div><button draggable="false" aria-label="Close" title="Close" type="button" class="gm-ui-hover-effect" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; text-transform: none; appearance: none; position: relative; cursor: pointer; user-select: none; width: 48px; height: 48px;"><span style="mask-image: url(&quot;data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E&quot;); pointer-events: none; display: block; width: 24px; height: 24px; margin: 12px;"></span></button></div><div class="gm-style-iw-d" style="overflow: scroll; max-height: 205px;"><div><div id="content">
                <p><b class="gm-marker-title">J&amp;M Rentals Ltd.</b></p>
                <p></p>
                <p></p>
                <p><a href="https://www.google.com/maps/dir/?api=1&amp;destination=30010%20MB-216,%20Grunthal,%20MB%20R0A%200R0,%20Canada" target="_blank">Directions</a></p></div></div></div></div><div class="gm-style-iw-tc"></div></div></div></div></div></div></div>