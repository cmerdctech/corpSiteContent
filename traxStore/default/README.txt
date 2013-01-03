This directory is named default. That is because the url, simpleStore/generate/process,
is not part of the multiSite routing. Consequently, it is routed by the default router and
the multiSite content system looks for a directory of that name.

This is not a good thing. I have tried to use multiSite routing to change it and failed.
The fact that there is no explicit connection between the directory name and the controller
is disturbing. Although, having a directory of control stuff for all non-multiSite stuff
may look better later.