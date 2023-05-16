export const getHalfMonth = (d) => {
  let m = new Date(d).toLocaleString("id-ID", { month: "short" });
  return m ? m : null;
};

export const tanggalIndo = (d) => {
  let d1 = new Date(d).toLocaleDateString("en-GB");
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

export const formatDateForm = (d) => {
  let d1 = new Date(d).toISOString().split("T")[0];
  return d1;
};

export const formatTimeForm = (d) => {
  let d1 = new Date(d).toLocaleTimeString("en-GB");
  console.log(d1);
  return d1;
};

export const formatFormDate = () => {
  let d = new Date().toLocaleDateString("fr-CA");
  // console.log(d);
  return d;
  // YYYY-MM-DD
};

export const formatFormTime = () => {
  let t = new Date().toLocaleTimeString("en-GB");
  t = t.substring(0, 2);
  // console.log(t);
  return t + ":00";
  // HH-mm-ss
};

export const formatNumberRibuan = (n) => {
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
