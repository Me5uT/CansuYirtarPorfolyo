import React from "react";

export const DoktorTakvimiWidget = () => {
  React.useLayoutEffect(() => {
    const script = document.createElement("script");
    script.id = "zl-widget-s";
    script.src = "//platform.docplanner.com/js/widget.js";
    const firstScript = document.getElementsByTagName("script")[0];

    if (firstScript.parentNode !== null) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doktortakvimi.com/cansu-yirtar/psikoloji/istanbul"
        rel="nofollow"
        data-zlw-doctor="cansu-yirtar"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
      >
        {/* Cansu Yırtar - DoktorTakvimi.com */}
      </a>
    </div>
  );
};
