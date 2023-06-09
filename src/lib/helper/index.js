export const getHalfMonth = (d) => {
  let m = new Date(d).toLocaleString("id-ID", { month: "short" });
  return m ? m : null;
};

export const distanceDate = (fullday) => {
  let dAgo = new Date(fullday);
  let dNow = new Date();

  let diff = parseInt((dNow - dAgo) / (1000 * 60 * 60 * 24), 10);

  let text;
  if (parseInt(diff / 365) > 0) {
    text = parseInt(diff / 365) + " tahun lalu";
  } else if (parseInt(diff / 30) > 0) {
    text = parseInt(diff / 30) + " bulan lalu";
  } else {
    text = diff + " hari lalu";
  }

  // console.log(parseInt(diff / 30), text);
  return text;
};

export const tanggalIndo = (d) => {
  let d1 = new Date(d).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  let t1 = new Date(d).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return d1 + ", " + t1;
};

export const viewTanggalIndo = (d, type) => {
  switch (type) {
    case "date":
      return new Date(d).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      break;
    default:
      let dd = new Date(d);
      let dd2 = dd.setMinutes(dd.getMinutes() - 25);
      let dd3 = new Date(dd2);
      return dd3.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
  }
};

export const formatFormDate = (dd) => {
  let d = dd ? new Date(dd) : new Date();
  // console.log(d);
  return d.toLocaleDateString("fr-CA");
  // YYYY-MM-DD
};

export const formatFormTime = (tt) => {
  let t = tt ? new Date(tt) : new Date();
  t = t.toLocaleTimeString("en-GB");
  t = t.substring(0, 2);
  // console.log(t);
  return t + ":00";
  // HH-mm-ss
};

export const formatNumberRibuan = (n) => {
  if (!n) return;
  n = n > 0 ? n : -n;

  if (parseInt(n) - n != 0) {
    n = n.toFixed(2);
    n = n.toString().replace(".", ",");
    return n;
    // 00,00
  }

  n = n.toString().split("").reverse();
  let res = [];
  let num = 3;
  n.forEach((e, i) => {
    if (i == num) {
      res.push(".");
      num = num * 2;
    }
    res.push(e);
  });
  return res.reverse().join("");
  // 000.000
};
