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

    return totalMinutes.toString();
  }

  function normalizeOffer(offer) {
    let normalizedOffer = offer.trim();
    if (normalizedOffer.endsWith("%")) {
      normalizedOffer = normalizedOffer.slice(0, -1);
    }
    return normalizedOffer;
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

  // Normalize offer if valid
  const normalizedOffer = isValidOfferValue ? normalizeOffer(offer) : null;

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
    offer: normalizedOffer,
    deliveryTime: normalizedDeliveryTime,
  };
}

function validateStoreInfo2(openTime, closeTime, offer, deliveryTime, type) {
  const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9]\s?(am|pm|AM|PM)$/;
  const offerRegex = /^(\d{1,2}%|\d{1,2})$/;
  const deliveryTimeRegex = /^\d+\s?min$|^\d+\s?hr\s\d+\s?min$/;
  const allowedTypes = ["veg", "nonveg", "both"];

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

  function isValidType(type) {
    return allowedTypes.includes(type.trim().toLowerCase());
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

  // Validate type
  const isValidTypeValue = isValidType(type);
  const normalizedType = isValidTypeValue ? type.trim().toLowerCase() : null;

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
  if (!isValidTypeValue) {
    errors.push("Invalid type. Please use 'Veg', 'Nonveg', or 'Both'.");
  }

  // Return validation result and normalized values
  return {
    isValid: errors.length === 0,
    errors,
    normalizedOpenTime,
    normalizedCloseTime,
    offer: isValidOfferValue ? offer : null,
    deliveryTime: normalizedDeliveryTime,
    type: normalizedType,
  };
}

export { validateStoreInfo, validateStoreInfo2 };
