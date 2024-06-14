function validateStoreInfo(openTime, closeTime, offer, deliveryTime) {
  const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9]\s?(am|pm|AM|PM)$/;
  const offerRegex = /^(\d{1,2}%|\d{1,2})$/;
  const deliveryTimeRegex = /^\d+\s?min$|^\d+\s?hr\s\d+\s?min$/;

  function isValidTime(time) {
    return timeRegex.test(time);
  }

  function isValidOffer(offer) {
    return offerRegex.test(offer);
  }

  function normalizeTime(time) {
    let normalizedTime = time.trim().toLowerCase();

    if (!normalizedTime.includes(":")) {
      normalizedTime = normalizedTime.replace(/(\d+)(am|pm)/, "$1:00$2");
    }

    return normalizedTime.replace(/\s*(am|pm)$/, " $1").toUpperCase();
  }

  function isValidDeliveryTime(time) {
    return deliveryTimeRegex.test(time);
  }

  function normalizeDeliveryTime(time) {
    let normalizedTime = time.trim().toLowerCase();
    let totalMinutes = 0;

    if (normalizedTime.includes("hr")) {
      const parts = normalizedTime.match(/(\d+)\s?hr\s(\d+)\s?min/);
      if (parts) {
        const hours = parseInt(parts[1], 10);
        const minutes = parseInt(parts[2], 10);
        totalMinutes = hours * 60 + minutes;
      }
    } else if (normalizedTime.includes("min")) {
      const parts = normalizedTime.match(/(\d+)\s?min/);
      if (parts) {
        totalMinutes = parseInt(parts[1], 10);
      }
    }

    return totalMinutes;
  }

  // Validate and normalize times
  const isValidOpenTime = isValidTime(openTime);
  const isValidCloseTime = isValidTime(closeTime);
  const normalizedOpenTime = isValidOpenTime ? normalizeTime(openTime) : null;
  const normalizedCloseTime = isValidCloseTime
    ? normalizeTime(closeTime)
    : null;

  // Validate offer
  const isValidOfferValue = offer ? isValidOffer(offer) : "";

  // Validate delivery time
  const isValidDeliveryTimeValue = isValidDeliveryTime(deliveryTime);
  const normalizedDeliveryTime = isValidDeliveryTimeValue
    ? normalizeDeliveryTime(deliveryTime)
    : null;

  // Prepare error messages
  let errors = [];
  if (!isValidOpenTime) {
    errors.push(
      "Invalid open time format. Please use the format 'HH:MM AM/PM'."
    );
  }
  if (!isValidCloseTime) {
    errors.push(
      "Invalid close time format. Please use the format 'HH:MM AM/PM'."
    );
  }
  if (offer && !isValidOfferValue) {
    errors.push(
      "Invalid offer format. Please use a percentage like '30%' or a number like '30'."
    );
  }
  if (!isValidDeliveryTimeValue) {
    errors.push(
      "Invalid delivery time format. Please use the format 'X min' or 'X hr Y min'."
    );
  }

  // Return validation result and normalized values
  return {
    isValid: errors.length === 0,
    errors,
    normalizedOpenTime,
    normalizedCloseTime,
    offer: isValidOfferValue ? offer : null,
    deliveryTime: normalizedDeliveryTime,
  };
}

// Example usage
const userInput = {
  openTime: "10:00 pm",
  closeTime: "11:00 pm",
  offer: "30%",
  deliveryTime: "1 hr 40 min",
};

export { validateStoreInfo };
