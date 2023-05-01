**1.** The bug is that instead of the numbers being added they are getting concatenated because the numbers getting inputted is in the form of ```string```. 

**2.** I would fix it by utilizing the ``` parseInt() ``` function around the numbers when it is getting added in _line 11_. This will forcefully do type conversion. 