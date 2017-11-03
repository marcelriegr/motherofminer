const ModelDownloads = require('../schema/downloads');

const Util = {
  log_stats: (ip, public_wallet_id, mining_port, os, processor) => {
    const d = new ModelDownloads({
      ip,
      public_wallet_id,
      mining_port,
      os,
      processor
    });
    return d.save();
  }
};

module.exports = Util;
