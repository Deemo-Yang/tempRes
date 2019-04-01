'use strict';
module.exports = function(Myuser) {
    // Myuser.beforeRemote('post', function(contant, response){
        

    // })
    


    // Myuser.beforeRemote('post', function(next,re){

    //     var status = Myuser.getDatasource().status;
    //     console.log('==========>'+status);
        
    //     if(status == "0") {
    //         var err = new Error('没有登陆的权限');
    //         re(err);
    //       } else {
    //         next();
    //       }
    // });

    Myuser.on('attached', function(app) {
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        // initialize role mapping
        Myuser.find().then(function(users) {
          if(users) {
              users.forEach(user => {
                  RoleMapping.findOne({
                      where: {
                          principalId: user.id
                      }
                  }).then(function(principal) {
                      if(principal) {
                          principal.updateAttribute({roleId: user.roleId})
                      } else {
                          RoleMapping.create({
                              principalType: RoleMapping.USER,
                              principalId: user.id,
                              roleId: user.roleId
                          }, function(err, principal) {
                              if(err) {
                                  throw err;
                              }
                          })
                      }
                  })
              })
          } else {
              console.log("No staff registered");
          }
        }).catch(function(err) {
            console.log(err.message);
            throw err;
        })
      });
};
