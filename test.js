var deluge = require('./index.js')('https://url/json', 'deluge', 'user', 'password');


var callback = function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(result);
};

deluge.getHosts(callback);
//deluge.isConnected(callback);
deluge.getTorrentRecord(callback);
//deluge.listMethods(callback);
//deluge.pauseAll(callback);
//deluge.getTorrentStatus(callback);

/*
deluge.getTorrentIds(function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    result.forEach(function (torrentId, index) {
        deluge.getTorrentStatus(torrentId, function(error, result) {
            if(error) {
                console.error(error);
                return;
            }
            if (result) {
                console.log(result);
            } else {
                console.log('done');
            }
        }); 
    });
});
*/
/*
deluge.getTorrentIds(function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    deluge.resume(result[0], function(error, result) {
        if(error) {
            console.error(error);
            return;
        }
        if (result) {
            console.log(result);
        } else {
            console.log('done');
        }
    }); 
});
*/

deluge.getTorrentIds(function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(result);
    console.log('pause ' + result[0]);
    deluge.pause(result[0], function(error, result) {
        if(error) {
            console.error(error);
            return;
        }
        if (result) {
            console.log(result);
        } else {
            console.log('done');
        }
    }); 
});



/* methods
[ 'core.upload_plugin',
  'core.rescan_plugins',
  'core.force_recheck',
  'core.glob',
  'core.remove_torrent',
  'core.resume_all_torrents',
  'core.queue_top',
  'daemon.get_method_list',
  'core.set_torrent_options',
  'core.set_torrent_prioritize_first_last',
  'core.get_session_state',
  'core.set_torrent_move_completed',
  'core.get_available_plugins',
  'core.set_torrent_file_priorities',
  'core.get_config',
  'core.disable_plugin',
  'core.test_listen_port',
  'core.connect_peer',
  'core.enable_plugin',
  'core.get_filter_tree',
  'core.set_torrent_remove_at_ratio',
  'core.get_torrent_status',
  'core.get_config_values',
  'core.pause_torrent',
  'core.move_storage',
  'core.force_reannounce',
  'core.add_torrent_file',
  'core.get_listen_port',
  'core.set_torrent_move_completed_path',
  'core.set_torrent_stop_at_ratio',
  'core.rename_folder',
  'core.add_torrent_url',
  'core.get_enabled_plugins',
  'core.get_libtorrent_version',
  'core.get_path_size',
  'core.set_torrent_max_connections',
  'core.get_config_value',
  'core.get_session_status',
  'core.create_torrent',
  'core.add_torrent_magnet',
  'daemon.info',
  'core.set_torrent_stop_ratio',
  'core.set_torrent_auto_managed',
  'core.pause_all_torrents',
  'core.get_torrents_status',
  'core.rename_files',
  'core.get_free_space',
  'core.queue_bottom',
  'core.set_torrent_max_upload_speed',
  'core.resume_torrent',
  'core.set_torrent_max_upload_slots',
  'core.set_config',
  'core.get_cache_status',
  'core.queue_down',
  'daemon.shutdown',
  'core.get_num_connections',
  'core.set_torrent_max_download_speed',
  'core.queue_up',
  'core.set_torrent_trackers',
  'web.get_torrent_info',
  'web.add_torrents',
  'web.get_plugins',
  'web.start_daemon',
  'web.add_host',
  'web.deregister_event_listener',
  'web.register_event_listener',
  'web.get_magnet_info',
  'web.get_torrent_status',
  'auth.delete_session',
  'web.download_torrent_from_url',
  'webapi.add_torrent',
  'web.get_config',
  'web.get_hosts',
  'web.disconnect',
  'auth.check_session',
  'web.set_config',
  'auth.login',
  'web.get_plugin_resources',
  'web.upload_plugin',
  'web.connect',
  'webapi.get_api_version',
  'web.get_events',
  'auth.change_password',
  'web.get_host_status',
  'web.remove_host',
  'web.connected',
  'web.get_torrent_files',
  'webapi.get_torrents',
  'webapi.remove_torrent',
  'web.stop_daemon',
  'web.update_ui',
  'web.get_plugin_info' ]

*/