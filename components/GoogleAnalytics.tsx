import Script from "next/script";

// Google Analytics Measurement ID - Replace with your actual GA4 ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function GoogleAnalytics(): React.ReactElement {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
          
          // Custom event tracking functions
          window.trackEvent = function(eventName, eventParams) {
            gtag('event', eventName, eventParams);
          };
          
          // Conversion goals tracking
          window.trackConversion = function(conversionType, value) {
            gtag('event', 'conversion', {
              'event_category': 'engagement',
              'event_label': conversionType,
              'value': value || 1
            });
          };
          
          // Track CTA clicks
          window.trackCTAClick = function(ctaName, ctaLocation) {
            gtag('event', 'cta_click', {
              'event_category': 'CTA',
              'event_label': ctaName,
              'cta_location': ctaLocation
            });
          };
          
          // Track pricing page views
          window.trackPricingView = function(planName) {
            gtag('event', 'view_item', {
              'event_category': 'pricing',
              'event_label': planName
            });
          };
          
          // Track signup intent
          window.trackSignupIntent = function(source) {
            gtag('event', 'sign_up_intent', {
              'event_category': 'conversion',
              'event_label': source
            });
          };
          
          // Track trial start
          window.trackTrialStart = function() {
            gtag('event', 'start_trial', {
              'event_category': 'conversion',
              'event_label': 'free_trial'
            });
          };
        `}
      </Script>
    </>
  );
}
